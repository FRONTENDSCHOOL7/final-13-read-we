import React from 'react';
import styles from './CmtListItem.module.css';

const CmtListItem = ({ cmtItem }) => {
  return (
    <li className={styles.cmtList}>
      <div className={styles.cmtImgText}>
        <div className={styles.cmtImg}>
          <img src={cmtItem.author.image} alt="프로필" />
        </div>
        <div className={styles.cmtText}>
          <strong>{cmtItem.author.username}</strong>
          <p>{cmtItem.content}</p>
        </div>
      </div>
      <div className={styles.dateLike}>
        <span>{new Date(cmtItem.createdAt).toLocaleDateString('ko-KR')}</span>
        <button className="like-counter">
          <i className="icon icon-like" />
        </button>
      </div>
    </li>
  );
};

export default CmtListItem;
