import React from 'react';
// 게시물 카드섹션
const MainCard = () => {
  return (
    <ul className="home-post">
      <li>
        <a href="#" className="home-post-list">
          <div className="post-info">
            <div className="user">
              <div className="img-wrap">
                <img
                  alt="프로필 이미지"
                  src={process.env.PUBLIC_URL + '/images/icon/testProfile.png'}
                />
              </div>
              <span>
                by
                <strong>username</strong>
              </span>
            </div>
            <div className="ect">
              <div className="like-comment">
                <button className="like-counter">
                  <i className="icon icon-like"></i>
                  <strong>250</strong>
                </button>
                <button className="comment-counter">
                  <i className="icon icon-comment"></i>
                  <strong>250</strong>
                </button>
                <i className="icon icon-share"></i>
                <span>Oct.10.2023</span>
              </div>
            </div>
          </div>
          <div className="post-content">
            <div className="book-search-bth">
              <button type="button">
                <img
                  alt="프로필 이미지"
                  src={process.env.PUBLIC_URL + '/images/icon/testProfile.png'}
                />
                <p>
                  책 정보 보기
                  <i className="icon icon-search-btn"></i>
                </p>
              </button>
            </div>
            <div className="book-info">
              <h3 className="book-info-title">
                누구나 쉽게 배우는 자바스크립트
                <span className="tag hit">HIT</span>
              </h3>
              <div className="book-score">
                <i className="icon icon-star-active"></i>
                <i className="icon icon-star-active"></i>
                <i className="icon icon-star-active"></i>
                <i className="icon icon-star-active"></i>
                <i className="icon icon-star"></i>
                <span className="book-score-text">4.9점</span>
              </div>
              <div className="book-author">
                <p>
                  농담곰이
                  <span>저</span>
                </p>
                <p>
                  dalgomi
                  <span>출판</span>
                </p>
              </div>
              <p className="book-content">
                제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야
                하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다. 다만,
                대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와
                국회재적의원 3분의 2 이상의 찬성이 있어야 한다.
              </p>
              <div className="tag-wrap">
                <span className="tag gray">에세이</span>
                <span className="tag gray">고양이</span>
                <span className="tag gray">만화</span>
              </div>
            </div>
          </div>
          <div className="post-footer">
            <div className="like-comment">
              <button className="like-counter">
                <i className="icon icon-like"></i>
                <strong>250</strong>
              </button>
              <button className="comment-counter">
                <i className="icon icon-comment"></i>
                <strong>250</strong>
              </button>
            </div>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default MainCard;
