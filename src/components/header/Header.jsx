import React from 'react';
import styles from './header.module.css';

export default function Header() {
  return (
    <header>
      <div className={styles['header-Container']}>
        {/* <div className="logo-Image"> */}
        <h1 className={styles['logo-Image']}>
          <a href="#">
            <img
              src={process.env.PUBLIC_URL + '/icon/READWE.svg'}
              alt="READ WE"
            />
          </a>
        </h1>
        {/* </div> */}
        <nav className={styles['container-Link']}>
          <a href="#">HOME</a>
          <a href="#">Contact</a>
          <a href="#">Services</a>
          <a href="#">Features</a>
          <a href="#">About Us</a>
        </nav>
        <button className={styles['btn-allmenu']} type="button">
          <span className={styles['a11y-hidden']}>전체 메뉴 열기</span>
          <span className={styles['line']}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
}
