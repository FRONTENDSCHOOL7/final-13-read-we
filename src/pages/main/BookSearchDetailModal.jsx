import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { BasicBtn } from '../../components/button/BtnStyle';
import { IconIpt, SearchIpt } from '../../components/input/IptStyleEtc';
import { BasicIpt } from '../../components/input/IptStyle';
import EmptyList from './EmptyList';
import styles from './css/BookSearchDetailModal.module.css';

const BookSearchDetailModal = (props) => {
  const [searchText, setSearchText] = useState('');
  const [searchAlert, setSearchAlert] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const searchInputRef = useRef(null);

  // 팝업 열렸을 경우 body스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  // 팝업 화면에서 입력 필드에 포커스 이동
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  // 팝업 닫기
  const closePopup = () => {
    props.closePopup();
  };

  //알라딘 책검색 API
  const fetchBook = async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const aladinUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttb22pqpq1534001&Query=${searchText}&QueryType=Title&MaxResults=5&start=1&SearchTarget=Book&Cover=Big&output=JS&Version=20131101`;
    try {
      const response = await axios.get(proxyUrl + aladinUrl);
      if (response.status === 200) {
        if (response.data.item.length === 0) {
          setNoResults(true);
        }
        setSearchResults(response.data.item);
        setNoResults(false);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    //검색어 입력 없이 검색 버튼 클릭 시 아래 if절만 실행(알라딘 책검색 API 사용 X)
    if (searchText === '') {
      searchInputRef.current.focus();
      setSearchAlert(
        <p className={styles['search-alert']}>
          ⚠️ 도서이름을 작성하고 검색버튼을 눌러주세요
        </p>,
      );
      return;
    }
    setSearchAlert('');
    //알라딘 책검색 API 실행
    fetchBook();
  };

  //엔터키 사용시에도 검색기능 동작
  const handleSearchKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  const selectBook = (selectedBook) => {
    props.onBookSelect(selectedBook);
    props.closePopup();
  };

  return (
    <div className="modal-area">
      <div className="modal-bg" />
      <div className="modal-wrap">
        <div className={styles['modal-title']}>
          <h2>도서 검색</h2>
          <strong>독서기록을 남길 책을 찾아요</strong>
        </div>
        <div className={styles.searchWrap}>
          <SearchIpt>
            <IconIpt>
              <BasicIpt
                type="text"
                placeholder="도서 이름을 입력하세요."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyUp={handleSearchKeyUp}
                ref={searchInputRef}
              />
              <i class="icon icon-search" />
            </IconIpt>
            <BasicBtn onClick={(e) => handleSearch(e)}>검색</BasicBtn>
          </SearchIpt>
          {searchAlert}
        </div>
        <h3 className="modal-title">검색 결과</h3>
        {noResults ? (
          <EmptyList text="일치하는 도서가 없습니다." />
        ) : (
          <div className={styles.scrollArea}>
            <div className="modal-content row-2">
              {searchResults.map((book, index) => (
                <div
                  className="row-2"
                  key={index}
                  onClick={() => selectBook(book)}
                >
                  {/* 검색 결과 도서 정보 표시 */}
                  <div className="book-info-obj">
                    <img alt="책 이미지" src={book.cover} />
                  </div>
                  <div className="book-info-text">
                    <strong className="book-public">
                      <span>출판사 |</span> {book.publisher}
                    </strong>
                    <h3 className="book-title">{book.title}</h3>
                    <div>
                      <span className="tag orange">지은이</span>
                      <strong className="book-author">{book.author}</strong>
                    </div>
                    <p className="book-content ellipsis">{book.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <BasicBtn
          round="0px"
          bgcolor="#E87C3E"
          shadow="none"
          wid="100%"
          onClick={closePopup}
        >
          닫기
        </BasicBtn>
      </div>
    </div>
  );
};

export default BookSearchDetailModal;
