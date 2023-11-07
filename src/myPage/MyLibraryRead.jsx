import React from 'react';
import styles from './css/myPage.module.css';

const MyLibraryRead = (props) => {
  return (
    <li className={styles.MybookListObj}>
      <div className={styles.MybookListObjImg}>
        <img src={process.env.PUBLIC_URL + `/images/${props.bookImgSrc}`} />
      </div>
      <p>{props.title}</p>
    </li>
  );
};

export default MyLibraryRead;
