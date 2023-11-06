import React from 'react';
import styles from './css/HeartModalStyle.module.css';

const HeartModal = () => {
  return (
    <div className={styles['heart-container']}>
      <div className={`${styles['heart-gray']} ${styles['heart-img']}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="258"
          height="250"
          viewBox="0 0 88 80"
          fill="none"
        >
          <path
            d="M84.0004 16.8864C75 -2 53.0367 -0.0585938 43.855 16.8864C35.1794 -0.551775 12.5078 -2.67541 4.49811 16.8864C-3.51154 36.4482 22.189 56.2464 43.855 76.1845C65.0364 57.1774 91.4963 37.5 84.0004 16.8864Z"
            fill="white"
            fillOpacity="0.5"
            stroke="#D9D9D9"
            strokeWidth="5"
          />
        </svg>
      </div>
      <div className={`${styles['heart-active']} ${styles['heart-img']}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="258"
          height="250"
          viewBox="0 0 88 80"
          fill="none"
        >
          <path
            d="M84.0002 16.8864C74.9998 -2 53.0364 -0.0585938 43.8547 16.8864C35.1791 -0.551775 12.5075 -2.67541 4.49786 16.8864C-3.51179 36.4482 22.1888 56.2464 43.8547 76.1845C65.0362 57.1774 91.4961 37.5 84.0002 16.8864Z"
            fill="#E87C3E"
            stroke="#E87C3E"
            strokeWidth="5"
          />
        </svg>
      </div>
      <div className={styles['heart-obj-container']}>
        <div className={styles['heart-obj']}></div>
        <div className={styles['heart-obj']}></div>
        <div className={styles['heart-obj']}></div>
        <div className={styles['heart-obj']}></div>
        <div className={styles['heart-obj']}></div>
      </div>
    </div>
  );
};

export default HeartModal;
