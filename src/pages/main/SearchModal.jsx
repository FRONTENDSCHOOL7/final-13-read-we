import React, { useState, useEffect } from 'react';
import styles from './css/SearchModal.module.css';
import axios from 'axios';
import { IconIpt } from '../../components/input/IptStyleEtc';
import { BasicIpt } from '../../components/input/IptStyle';
import { BasicBtn } from '../../components/button/BtnStyle';
import { SearchIpt } from '../../components/input/IptStyleEtc';

const SearchModal = ({ hideModal, trendUnits }) => {
  const [searchBook, setSearchBook] = useState([]); // 책검색 결과
  const [bookName, setBookName] = useState(null); // 책제목
  const [searchResult, setSearchResult] = useState(true); // 검색결과 상태

  console.log(trendUnits);
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

  // 알라딘 책검색
  const fetchBook = async (e) => {
    e.preventDefault();
    //검색어가 비어있을 경우
    if (bookName === null || bookName === '') {
      alert('검색어를 입력해주세요.');
      return;
    }
    console.log('검색버튼누름');
    const aladinUrl = `https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttb22pqpq1534001&Query=${bookName}&QueryType=Title&MaxResults=50&start=1&SearchTarget=Book&Book&Cover=Big&output=JS&Version=20131101`;

    try {
      const response = await axios.get(aladinUrl);
      if (response.status === 200) {
        setSearchBook(response.data.item); // API 호출 결과를 searchBook state에 저장
        setSearchResult(bookName);
      } else {
        console.log('Error: ', response.status);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const DisplayBooks = () => {
    // 따로 컴포넌트 처리하기.
    return searchBook.map((book, index) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <div className="modal-content row-2">
          <div className="row-2">
            <div className="book-info-obj">
              <img alt="책 이미지" src={book.cover} />
            </div>
            <div className="book-info-text">
              <div className={styles.disbooks_flexwrap}>
                <strong className="book-public">
                  <span>출판사 |</span> {book.publisher}
                </strong>
                <a className={styles.disbooks_link} href={book.link}>
                  구매하기(알라딘) &gt;
                </a>
              </div>
              <h3 className="book-title">{book.title}</h3>
              <div>
                <span className="tag orange">지은이</span>
                <strong className="book-author">{book.author}</strong>
              </div>
              <p className="book-content ellipsis">{book.description}</p>
            </div>
            <p className="end-point" />
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.pageWrap}>
      <button className={styles.closeBtn} onClick={hideModal}>
        <i className="icon icon-xbtn" />
      </button>
      <div className={styles.contentArea}>
        <SearchIpt>
          <IconIpt>
            <BasicIpt
              sm="true"
              placeholder="검색어를 입력해 주세요"
              type="text"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
            <i class="icon icon-search" />
          </IconIpt>
          <BasicBtn onClick={fetchBook}>검색</BasicBtn>
        </SearchIpt>

        {searchBook.length === 0 ? (
          <>
            <h4 className={styles['example-books-title']}>
              이 책은 어떠세요?<strong>ReadWe 추천 베스트 셀러</strong>
            </h4>
            <div className={styles['example-books']}>
              {trendUnits.map((book, index) => (
                <div key={index}>
                  <img src={book.cover} alt="책이미지" />
                  <p>{book.title}</p>
                </div>
              ))}
            </div>
            <div className={styles['search-result']}>
              <h3 className={styles['show-result']}>
                <span className={styles.emphasis}>{searchResult}</span>에 대한
                대한 검색 결과
              </h3>
              <div className={styles.zero}>
                <p className={styles['all-zero']}>전체 0건</p>
              </div>
              <div className={styles['center-container']}>
                <p className={styles['no-result']}>
                  {searchResult}에 대한 검색 결과가 없습니다.
                </p>
                <div className={styles.check}>
                  <p>
                    검색어의 철자가 정확한지 다시 한 번 확인해주세요.
                    <br />
                    검색어의 단어 수를 줄이거나, 두 단어 이상의 검색어인 경우,
                    띄어쓰기를 해주세요.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          // 검색 결과가 있을 때 보여줄 요소들
          <div className={styles.disbooks_list}>
            <h3 className={styles['show-result']}>
              <span className={styles.emphasis}>{searchResult}</span>에 대한
              대한 검색 결과
            </h3>
            <DisplayBooks />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
