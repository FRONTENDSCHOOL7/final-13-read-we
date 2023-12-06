import React, { useState, useEffect } from 'react';
import styles from './css/SearchModal.module.css';
import axios from 'axios';
import { IconIpt } from '../../components/input/IptStyleEtc';
import { BasicIpt } from '../../components/input/IptStyle';

const SearchModal = ({ hideModal }) => {
  const [searchBook, setSearchBook] = useState([]); // 책검색 결과
  const [bookName, setBookName] = useState(''); // 책제목
  // 알라딘 책검색
  useEffect(() => {
    console.log(searchBook);
  }, [searchBook]);
  const fetchBook = async () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const aladinUrl = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttb22pqpq1534001&Query=${bookName}&QueryType=Title&MaxResults=5&start=1&SearchTarget=Book&output=JS&Version=20131101`;

    try {
      const response = await axios.get(proxyUrl + aladinUrl);
      if (response.status === 200) {
        setSearchBook(response.data.item); // API 호출 결과를 searchBook state에 저장
      } else {
        console.log('Error: ', response.status);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  const displayBooks = () => {
    return searchBook.map((book, index) => {
      return (
        <div key={index}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <img src={book.cover} alt={book.title} />
          <p>{book.description}</p>
          <a href={book.link}>자세히 보기</a>
        </div>
      );
    });
  };

  return (
    <div className={styles.pageWrap}>
      <div className={styles.contentArea}>
        <IconIpt>
          <BasicIpt
            sm="true"
            placeholder="검색"
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
          <i class="icon icon-search" />
          <button onClick={fetchBook}>검색</button>
          {displayBooks()}
        </IconIpt>
        {searchBook.length === 0 ? (
          <>
            <div className={styles.header}>
              <h3 className={styles.title}>이 책은 어떠세요?</h3>
              <button className={styles['more-show']} onClick={hideModal}>
                취소
              </button>
            </div>
            <div className={styles['example-books']}>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/images/javascript.png'}
                  alt="Book 1"
                />
                <p>누구나 쉽게 배우는 자바 스크립트</p>
              </div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/images/money.png'}
                  alt="Book 2"
                />
                <p>돈의 속성</p>
              </div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/images/world-history.png'}
                  alt="Book 3"
                />
                <p>요즘 어른을 위한 최소한의 세계사</p>
              </div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/images/focus.png'}
                  alt="Book 4"
                />
                <p>도둑맞은 집중력</p>
              </div>
            </div>
            <div className={styles['search-result']}>
              <h3 className={styles['show-result']}>
                <span className={styles.emphasis}>'멋사 프론트엔드'</span>에
                대한 검색 결과
              </h3>
              <div className={styles.zero}>
                <p className={styles['all-zero']}>전체 0건</p>
              </div>
              <div className={styles['center-container']}>
                <p className={styles['no-result']}>
                  '멋사 프론트엔드'에 대한 검색 결과가 없습니다.
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
          </> // 검색 결과가 있을 때 보여줄 요소들
        ) : (
          <div>
            <h3>검색 결과</h3>
            {displayBooks()}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
