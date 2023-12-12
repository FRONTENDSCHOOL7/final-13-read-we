import React, { useEffect, useState } from 'react';
import { CounterBtn } from '../button/BtnStyleEtc';
import BookDetailModal from '../popup/BookDetailModal';
import { useNavigate } from 'react-router-dom';
import HeartModal from '../popup/HeartModal';

// 게시물 카드섹션
const MainCard = (props) => {
  const navigate = useNavigate();
  const accName = localStorage.getItem('accname');
  const [showPopup, setShowPopup] = useState(false);
  const [likeCount, setLikeCount] = useState(props.like);
  const [islikecheck, setIslikecheck] = useState(props.isLike);
  // 좋아요 모션 표시 여부
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeart(false);
    }, 1000);
    return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머를 정리합니다.
  }, [showHeart]);

  // 좋아요 API
  const baseUrl = 'https://api.mandarin.weniv.co.kr';
  const token = localStorage.getItem('token');
  const likeFn = async (postId) => {
    const reqUrl = baseUrl + `/post/${postId}/heart`;
    try {
      const res = await fetch(reqUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      setLikeCount(likeCount + 1);
      setIslikecheck(true);
      setShowHeart(true);
    } catch (error) {
      // 오류발생
      console.error('오류 내용:', error);
      alert('좋아요 실패:' + error);
    }
  };

  // 좋아요 취소 API
  const unlikeFn = async (postId) => {
    const reqUrl = baseUrl + `/post/${postId}/unheart`;
    try {
      await fetch(reqUrl, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      setLikeCount(likeCount !== 0 ? likeCount - 1 : likeCount);
      setIslikecheck(false);
    } catch (error) {
      // 오류발생
      console.error('오류 내용:', error);
      alert('좋아요 취소 실패:' + error);
    }
  };

  // 도서정보 팝업 핸들러
  const handleImageClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // 프로필 클릭 핸들러
  const handleProfileClick = () => {
    localStorage.setItem('otherName', props.accName);
    navigate(props.accName !== accName ? '/yourpage' : '/mypage');
  };

  return (
    <>
      <ul className="home-post">
        <li>
          <div className="home-post-list">
            <div className="post-info">
              <div className="user" onClick={handleProfileClick}>
                <div className="img-wrap">
                  {/* <img alt="프로필 이미지" src={`${props.imgSrc}`} /> */}
                  <img
                    alt="프로필 이미지"
                    src={process.env.PUBLIC_URL + props.imgSrc}
                  />
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
                <button type="button" onClick={handleImageClick}>
                  <img alt="책 이미지" src={`/images/${props.bookImgSrc}`} />
                  <p>
                    책 정보 보기
                    <i className="icon icon-search-btn" />
                  </p>
                </button>
              </div>
              <div className="book-info">
                <h3 className="book-info-title">
                  {props.title}
                  {props.hit ? <span className="tag hit">HIT</span> : ''}
                </h3>
                <div className="book-score">
                  <i className="icon icon-star-active" />
                  <i className="icon icon-star-active" />
                  <i className="icon icon-star-active" />
                  <i className="icon icon-star-active" />
                  <i className="icon icon-star" />
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
                <p
                  className={
                    props.hasDetail ? 'book-content-all' : 'book-content'
                  }
                >
                  {props.content}
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
                <CounterBtn
                  type="comment"
                  count={props.cmt ? props.cmt : '첫번째 댓글을 남겨보세요!'}
                />
                <CounterBtn
                  onClick={() => {
                    {
                      islikecheck
                        ? unlikeFn(props.postId)
                        : likeFn(props.postId);
                    }
                  }}
                  type={islikecheck === true ? 'like-active' : 'like'}
                  count={
                    likeCount !== 0 ? likeCount : '첫번째 좋아요를 눌러보세요!'
                  }
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
      {showPopup && <BookDetailModal closePopup={closePopup} {...props} />}
      {showHeart && <HeartModal />}
    </>
  );
};

export default MainCard;
