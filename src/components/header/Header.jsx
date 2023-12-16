import React, { useState } from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';
import MoreMenu from './MoreMenu';

export default function Header() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [showMore, setShowmore] = useState(false);

  //페이지 이동 핸들러
  const handlePageLink = (e, url) => {
    const urlPath = url + e.target.innerText.toLowerCase();
    e.preventDefault(); // 기본 링크 동작을 막습니다.
    navigate(`/${urlPath}`);
    setShowmore(false);
  };

  //더보기 버튼 핸들러
  const handleMoreMenu = (e) => {
    e.preventDefault();
    setShowmore((preve) => !preve);
  };
  const heaerNavList = [
    {
      navName: 'Main',
      urlPath: '',
    },
    {
      navName: 'Chat',
      urlPath: '',
    },
    {
      navName: 'Library',
      urlPath: 'mypage/',
    },
    {
      navName: 'Mypage',
      urlPath: '',
    },
  ];
  const heaerNavListNotLogin = [
    {
      navName: 'Login',
      urlPath: '',
    },
    {
      navName: 'Join',
      urlPath: '',
    },
  ];
  return (
    <header>
      <div className={styles['header-container']}>
        {token !== '' ? (
          <>
            <h1 className={styles['logo-Image']}>
              <a
                href="#"
                onClick={(e) => {
                  handlePageLink(e, 'main');
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + '/icon/READWE.svg'}
                  alt="READ WE"
                />
              </a>
            </h1>
            <nav className={styles['container-Link']}>
              {heaerNavList.map((item, i) => {
                return (
                  <a
                    key={i}
                    href="#"
                    onClick={(e) => handlePageLink(e, item.urlPath)}
                  >
                    {item.navName}
                  </a>
                );
              })}
            </nav>
            <div className={styles['container-moremenu']}>
              {showMore ? (
                <>
                  <button
                    className={`${styles['btn-allmenu']} ${styles.active}`}
                    type="button"
                    onClick={(e) => handleMoreMenu(e)}
                  >
                    <span className={styles.line}>
                      <span />
                      <span />
                      <span />
                    </span>
                  </button>
                  <MoreMenu onClick={() => setShowmore(false)} />
                </>
              ) : (
                <button
                  className={`${styles['btn-allmenu']}`}
                  type="button"
                  onClick={(e) => handleMoreMenu(e)}
                >
                  <span className={styles.line}>
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <h1 className={styles['logo-Image']}>
              <a href="#">
                <img
                  src={process.env.PUBLIC_URL + '/icon/READWE.svg'}
                  alt="READ WE"
                />
              </a>
            </h1>
            <nav
              className={`${styles['container-Link']} ${styles['login-menu']}`}
            >
              {heaerNavListNotLogin.map((item, i) => {
                return (
                  <a
                    key={i}
                    href="#"
                    onClick={(e) => handlePageLink(e, item.urlPath)}
                  >
                    {item.navName}
                  </a>
                );
              })}
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
