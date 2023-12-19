import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchModal from '../../pages/main/SearchModal';
import styles from './mobileFooter.module.css';

const MobileFooter = () => {
  //로그인/회원가입 선택 화면에서 header 숨기기
  const navList = [
    {
      navName: '홈',
      navIcon: 'icon-home',
      urlPath: '/main',
    },
    {
      navName: '마이페이지',
      navIcon: 'icon-my',
      urlPath: '/mypage',
    },
    {
      navName: '',
      navIcon: 'icon-xbtn',
      urlPath: '/postupload',
    },
    {
      navName: '채팅',
      navIcon: 'icon-chat',
      urlPath: '/chat',
    },
    {
      navName: '도서검색',
      navIcon: 'icon-search',
      urlPath: '#',
    },
  ];
  /*도서 검색 기능*/
  const [showBookSearchModal, setShowBookSearchModal] = useState(false);
  const [trendUnits, setTrendUnits] = useState([]);

  const bestSellerFetch = async (count, start) => {
    const aladinBSUrl = `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttb22pqpq1534001&QueryType=Bestseller&MaxResults=${count}&start=${start}&SearchTarget=Book&Cover=Big&output=JS&Version=20131101`;
    try {
      const response = await axios.get('http://localhost:8080/bestseller');
      if (response.status === 200) {
        const res = response.data.item;
        setTrendUnits(res);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    const randomStart = Math.floor(Math.random() * 100) + 1;
    bestSellerFetch(10, randomStart);
  }, []);
  const showModal = () => {
    setShowBookSearchModal(true);
  };
  const hideModal = () => {
    setShowBookSearchModal(false);
  };
  if (
    window.location.pathname === '/' ||
    window.location.pathname === '/login' ||
    window.location.pathname === '/join' ||
    window.location.pathname === '/join-success'
  )
    return null;
  return (
    <>
      <nav className={styles['mobile-footer-wrap']}>
        <ul>
          {navList.map((e, i) => {
            return (
              <li
                className={`${styles.obj} ${i === 2 ? styles['post-btn'] : ''}`}
                key={i}
                onClick={() => {
                  if (i === 4) {
                    showModal();
                  }
                }}
              >
                <Link to={e.urlPath} className={styles['obj-link']}>
                  <i className={`icon ${e.navIcon}`} />
                  {e.navName}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {showBookSearchModal && (
        <SearchModal hideModal={hideModal} trendUnits={trendUnits} />
      )}
    </>
  );
};

export default MobileFooter;
