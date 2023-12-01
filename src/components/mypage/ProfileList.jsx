import React from 'react';
import styles from '../../pages/myPage/css/myPage.module.css';
import axios from 'axios';

const ProfileList = (props) => {
  const baseUrl = 'https://api.mandarin.weniv.co.kr';
  const token = localStorage.getItem('token');

  //언팔로우 API
  const unfollowingFn = () => {
    const reqUrl = baseUrl + `/profile/${props.userAccName}/unfollow`;
    axios
      .delete(reqUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (res) {
        alert(`${props.userName}님 팔로우가 해제 되었습니다 🥲`);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      })
      .catch(function (error) {
        console.error(error);
        alert('팔로우 해제 실패:', error);
      });
  };

  //언팔로우 클릭 이벤트
  const unfollowingEvent = () => {
    unfollowingFn();
  };
  //a 태그 클릭 이벤트 방지
  const aClick = (e) => {
    e.preventDefault();
  };

  return (
    <li>
      <a href="#" className={styles.userListObj} onClick={aClick}>
        <div className={styles.leftObj} onClick={props.pageEvent}>
          <div className={styles.accImg}>
            <img alt="프로필 이미지" src={props.imgSrc} />
          </div>
          <div className="accText">
            <p>{props.userName}</p>
            <span>{props.userEmail}</span>
          </div>
        </div>
        {props.type === 'remove' ? (
          <button onClick={unfollowingEvent}>
            <i className={`icon icon-${props.type}`} />
          </button>
        ) : (
          <button>
            <i className={`icon icon-${props.type}`} />
          </button>
        )}
      </a>
    </li>
  );
};

export default ProfileList;
