import React from 'react';
import styles from '../../pages/myPage/css/myPage.module.css';

const MyLibraryRead = (props) => {
  return (
    <li className={styles.mybookListObj}>
      <div className={styles.mybookListObjImg}>
        <img
          alt="책 이미지"
          // 알라딘 API로 받아온 이미지와 로컬 이미지 url case구분
          src={
            /aladin/i.test(props.bookImgSrc)
              ? props.bookImgSrc
              : `/images/${props.bookImgSrc}`
          }
        />
      </div>
      <p>{props.title}</p>
    </li>
  );
};

export default MyLibraryRead;
