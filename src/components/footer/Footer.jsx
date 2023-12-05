import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
  //로그인/회원가입 선택 화면에서 header 숨기기
  if (window.location.pathname === '/') return null;
  return (
    <div className={styles.box}>
      <div className={styles['footer-content']}>
        <div className={styles['top-container']}>
          <div className={styles['box-1']} />
          <div className={styles['box-2']} />
        </div>
        <div className={styles['bottom-container']}>
          <p className={styles['readwe-Info']}>
            Read We | Terms | Privacy | Cookies | Instagram
            <br />
            ©️ Read We. All rights reserved.
          </p>
          <div className={styles['icon-box']}>
            <div className={styles['linkedin-Icon']} />
            <div className={styles['facebook-Icon']} />
            <div className={styles['share-Icon']} />
          </div>
        </div>
      </div>
    </div>
  );
}
