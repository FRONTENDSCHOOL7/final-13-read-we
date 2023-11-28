import React from 'react';
import styles from '../../pages/myPage/css/myPage.module.css';

const ProfileList = (props) => {
  const accName = props.userAccName;
  const token = localStorage.getItem('token');

  const unfollowingFn = async (accName) => {
    const reqUrl = `/profile/${accName}/unfollow`;
    const baseUrl = 'https://api.mandarin.weniv.co.kr';
    try {
      const res = await fetch(baseUrl + reqUrl, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      alert(`${props.userName}님 팔로우가 해제 되었습니다 🥲`);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } catch (error) {
      console.error('팔로우 실패:', error);
    }
  };
  //언팔로우 클릭 이벤트
  const unfollowingEvent = () => {
    unfollowingFn(accName);
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
