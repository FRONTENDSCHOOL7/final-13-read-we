import React from 'react';
import styles from '../../myPage/css/myPage.module.css';

const ProfileList = (props) => {
  return (
    <li>
      <a href="#" className={styles.userListObj}>
        <div className={styles.leftObj}>
          <div className={styles.accImg}>
            <img alt="프로필 이미지" src={`/images/${props.imgSrc}`} />
          </div>
          <div className="accText">
            <p>{props.userName}</p>
            <span>{props.userEmail}</span>
          </div>
        </div>
        <button>
          <i className={`icon icon-${props.type}`} />
        </button>
      </a>
    </li>
  );
};

export default ProfileList;
