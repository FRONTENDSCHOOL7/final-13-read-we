import React from 'react';
import styles from './mobileFooter.module.css';
import { Link } from 'react-router-dom';

const MobileFooter = () => {
  return (
    <nav className={styles['mobile-footer-wrap']}>
      <ul>
        <li className={styles.obj}>
          <Link to="/main" className={styles['obj-link']}>
            <i className="icon icon-home" />홈
          </Link>
        </li>
        <li className={styles.obj}>
          <Link to="/mypage" className={styles['obj-link']}>
            <i className="icon icon-my" />
            마이페이지
          </Link>
        </li>
        <li className={`${styles.obj} ${styles['post-btn']}`}>
          <Link to="/postupload" className={styles['obj-link']}>
            <i className="icon icon-xbtn" />
          </Link>
        </li>
        <li className={styles.obj}>
          <Link to="/chat" className={styles['obj-link']}>
            <i className="icon icon-chat" />
            채팅
          </Link>
        </li>
        <li className={styles.obj}>
          <Link to="/postupload" className={styles['obj-link']}>
            <i className="icon icon-search" />
            도서 검색
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileFooter;
