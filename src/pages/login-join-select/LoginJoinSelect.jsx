import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginJoinSelect.module.css'; // CSS 파일 import

const LoginJoinSelect = () => {
  return (
    <div className={styles['LoginJoinSelect-container']}>
      <video
        className={styles.video}
        src={process.env.PUBLIC_URL + '/images/readwe.mp4'}
        autoPlay
        loop
        muted
      />

      <div className={styles.content}>
        <div className={styles.buttons}>
          <Link to="/login">
            <button className={styles.button}>Login</button>
          </Link>

          <Link to="/join">
            <button className={styles.button}>Join</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginJoinSelect;
