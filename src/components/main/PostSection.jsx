import React from 'react';
import { CounterBtn } from '../button/BtnStyleEtc';
// 게시물 카드섹션
const MainCard = (props) => {
  return (
    <ul className="home-post">
      <li>
        <a href="#" className="home-post-list">
          <div className="post-info">
            <div className="user">
              <div className="img-wrap">
                <img alt="프로필 이미지" src={`/images/${props.imgSrc}`} />
              </div>
              <span>
                by
                <strong>{props.userName}</strong>
              </span>
            </div>
            <div className="ect">
              <div className="like-comment">
                {/* <CounterBtn type="comment" count={props.cmt} />
                <CounterBtn type="like" count={props.like} /> */}
                <i className="icon icon-share" />
                <span>{props.date}</span>
              </div>
            </div>
          </div>
          <div className="post-content">
            <div className="book-search-bth">
              <button type="button">
                <img alt="프로필 이미지" src={`/images/${props.imgSrc}`} />
                <p>
                  책 정보 보기
                  <i className="icon icon-search-btn"></i>
                </p>
              </button>
            </div>
            <div className="book-info">
              <h3 className="book-info-title">
                {props.title}
                {props.hit ? <span className="tag hit">HIT</span> : ''}
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
                  {props.author}
                  <span>저</span>
                </p>
                <p>
                  {props.public}
                  <span>출판</span>
                </p>
              </div>
              <p className="book-content">{props.content}</p>
              <div className="tag-wrap">
                <span className="tag gray">에세이</span>
                <span className="tag gray">고양이</span>
                <span className="tag gray">만화</span>
              </div>
            </div>
          </div>
          <div className="post-footer">
            <div className="like-comment">
              <CounterBtn
                type="comment"
                count={props.cmt ? props.cmt : '첫번째 댓글을 남겨보세요!'}
              />
              <CounterBtn
                type="like"
                count={props.like ? props.like : '첫번째 좋아요를 눌러보세요!'}
              />
            </div>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default MainCard;
