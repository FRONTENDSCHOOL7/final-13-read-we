import React from 'react';
import '../myPage/css/myPage.module.css';
import './css/SearchModal.css';

const SearchModal = ({ hideModal }) => {
  return (
    <div className="pageWrap">
      <div className="contentArea">
        <div className="header">
          <h3 className="title">이 책은 어떠세요?</h3>
          <button className="more-show" onClick={hideModal}>
            취소
          </button>
        </div>
        <div className="example-books">
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
        <div className="search-result">
          <h3 className="show-result">
            <span className="emphasis">'멋사 프론트엔드'</span>에 대한 검색 결과
          </h3>
          <div className="zero">
            <p className="all-zero">전체 0건</p>
          </div>
          <div className="center-container">
            <p className="no-result">
              '멋사 프론트엔드'에 대한 검색 결과가 없습니다.
            </p>
            <div className="check">
              <p>
                검색어의 철자가 정확한지 다시 한 번 확인해주세요.
                <br />
                검색어의 단어 수를 줄이거나, 두 단어 이상의 검색어인 경우,
                띄어쓰기를 해주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
