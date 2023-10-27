import React from 'react';
import styles from './CmtListItem.module.css';

const CmtListItem = ({ cmtItem }) => {
  return (
    <li>
      <div className={styles.cmtImgText}>
        <div className={styles.cmtImg}>
          <img
            src={process.env.PUBLIC_URL + `/images/${cmtItem.imgSrc}`}
            alt="프로필"
          />
        </div>
        <div className={styles.cmtText}>
          <strong>{cmtItem.userName}</strong>
          <p>{cmtItem.cmt}</p>
        </div>
      </div>
      <div className={styles.dateLike}>
        <span>{cmtItem.date}</span>
        <button className="like-counter">
          <i className="icon icon-like" />
        </button>
      </div>
    </li>
  );
};

export default CmtListItem;
