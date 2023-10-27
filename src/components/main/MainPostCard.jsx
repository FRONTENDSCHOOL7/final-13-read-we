import React from 'react';
import styles from './css/Main.module.css';
import { BasicBtn } from '../button/BtnStyle';

const MainPostCard = (props) => {
  return (
    <div className={styles.PostCardBox}>
      <div className={styles.Postbar}>
        <div className={styles.PostProfileImg}>
          <img alt="프로필 이미지" src={`/images/${props.imgSrc}`} />
        </div>
        <input type="text" placeholder="What are you reading?" />
      </div>
      <div className={styles.PostBoxIconButton}>
        <img src={process.env.PUBLIC_URL + 'images/icon/postCardIcon.svg'} />
        <BasicBtn
          md="true"
          bgcolor="#E87C3E"
          round="100px"
          wid="66px"
          hei="34px"
        >
          POST
        </BasicBtn>
      </div>
      <div className={styles.ShowPost}>
        <div>show 20 post</div>
      </div>
    </div>
  );
};

export default MainPostCard;