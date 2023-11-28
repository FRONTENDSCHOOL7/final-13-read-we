import React, { useEffect, useRef, useState } from 'react';
import { BasicBtn } from '../../components/button/BtnStyle';
import bookData from './bookdata.json';
import EmptyList from './EmptyList';
import styles from './BookSearchDetailModal.module.css';

const BookSearchDetailModal = (props) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const searchInputRef = useRef(null);

  const closePopup = () => {
    props.closePopup();
  };

  const selectBook = (selectedBook) => {
    props.onBookSelect(selectedBook);
    props.closePopup();
  };

  const handleSearch = () => {
    const results = bookData.bookdata.filter((book) => {
      return book.title.includes(searchText);
    });
    setSearchResults(results);
    // 검색어와 일치하는 도서가 없다면 true로 설정
    setNoResults(results.length === 0);
  };

  const handleSearchKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

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

  // 모달 화면에서 입력 필드에 포커스 이동
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <div className="modal-area">
      <div className="modal-bg"></div>
      <div className="modal-wrap">
        <div className={styles.searchWrap}>
          <div className="input-icon">
            <i className="icon icon-search" onClick={handleSearch}></i>
            <input
              type="text"
              placeholder="도서 이름을 입력하세요."
              className="basic sm"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyUp={handleSearchKeyUp}
              ref={searchInputRef}
            />
          </div>
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
                    <img
                      alt="책 이미지"
                      src={process.env.PUBLIC_URL + '/images/' + book.img}
                    />
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
                    <p className="book-content scrollArea">
                      {book.description}
                    </p>
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
          확인
        </BasicBtn>
      </div>
    </div>
  );
};

export default BookSearchDetailModal;
