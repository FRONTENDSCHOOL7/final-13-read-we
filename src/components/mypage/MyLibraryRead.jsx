import React from 'react';
import styles from '../../pages/myPage/css/myPage.module.css';

const MyLibraryRead = (props) => {
  return (
    <li className={styles.mybookListObj}>
      <div className={styles.mybookListObjImg}>
        <img src={process.env.PUBLIC_URL + `/images/${props.bookImgSrc}`} />
      </div>
      <p>{props.title}</p>
    </li>
  );
};

export default MyLibraryRead;
