import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { BasicBtn } from '../../components/button/BtnStyle';
import { IconIpt, SearchIpt } from '../../components/input/IptStyleEtc';
import { BasicIpt } from '../../components/input/IptStyle';
import EmptyList from './EmptyList';
import styles from './css/BookSearchDetailModal.module.css';
import LoadingModal from '../../components/popup/LoadingModal';

const BookSearchDetailModal = (props) => {
  const [bookName, setbookName] = useState('');
  const [searchAlert, setSearchAlert] = useState('');
  const [searchResults, setSearchResults] = useState([]); //알라딘 api 검색결과
  const [noResults, setNoResults] = useState(false);
  const searchInputRef = useRef(null);

  //무한 스크롤
  const [isBottom, setIsBottom] = useState(false);
  const [pageToFetch, setpageToFetch] = useState(1);

  //로딩 중 상태 체크용
  const [isLoading, setIsLoading] = useState(false);
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

  //도서 선택 시
  const selectBook = (selectedBook) => {
    props.onBookSelect(selectedBook);
    props.closePopup();
  };

  //알라딘 책검색 API
  const fetchBook = async (count, start, eventType) => {
    if (bookName === '') return;
    setIsLoading(true);
    // const aladinUrl = `https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttb22pqpq1534001&Query=${bookName}&QueryType=Title&MaxResults=${count}&start=${start}&SearchTarget=Book&Cover=Big&output=JS&Version=20131101`;
    try {
      const response = await axios.get(
        `https://port-0-node-express-aladinapi-hkty2alqbuns76.sel4.cloudtype.app/search?bookName=${bookName}&count=${count}&start=${start}`,
      );
      if (response.status === 200) {
        setIsLoading(false);
        const res = response.data.item;
        //eventType: 최초 도서검색(search), 검색결과스크롤(scroll)케이스 구분용
        if (eventType === 'search') {
          if (response.data.item.length === 0) {
            setNoResults(true);
            return;
          }
          setSearchResults(res);
          setNoResults(false);
          return;
        }
        setSearchResults(searchResults.concat(res));
        setNoResults(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching data: ', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    //검색어 입력 없이 검색 버튼 클릭 시 아래 if절만 실행(알라딘 책검색 API 사용 X)
    if (bookName === '') {
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
    fetchBook(30, 1, 'search');
  };

  //엔터키 사용시에도 검색기능 동작
  const handleSearchKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  // 무한 스크롤
  function isBottomFn(e) {
    if (
      e.target.scrollTop + e.target.offsetHeight >=
      e.target.children[0].offsetHeight
    ) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  }
  useEffect(() => {
    if (isBottom) {
      setpageToFetch((prevPage) => {
        return prevPage + 1;
      });
    }
  }, [isBottom]);

  useEffect(() => {
    if (!isLoading) {
      fetchBook(30, pageToFetch, 'scroll');
    }
  }, [pageToFetch]);

  return (
    <div className="modal-area">
      <div className="modal-bg" />
      <div className="modal-wrap">
        {isLoading ? <LoadingModal /> : ''}
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
                value={bookName}
                onChange={(e) => setbookName(e.target.value)}
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
          <div
            className={styles.scrollArea}
            onScroll={(e) => {
              isBottomFn(e);
            }}
          >
            <div className="modal-content row-2">
              {searchResults.map((book, i) => (
                <div className="row-2" key={i} onClick={() => selectBook(book)}>
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
                  <p className="end-point" />
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
