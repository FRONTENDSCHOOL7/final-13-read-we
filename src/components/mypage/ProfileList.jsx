import React from 'react';
import styles from '../../myPage/css/myPage.module.css';

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
      //화면 새로 고침
      // location.reload();
      alert('언팔로우 성공!!!!');
    } catch (error) {
      console.error('팔로우 실패:', error);
    }
  };
  //언팔로우 클릭 이벤트
  const unfollowingEvent = () => {
    unfollowingFn(accName);
  };

  return (
    <li>
      <a href="#" className={styles.userListObj}>
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
