import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import { useNavigate } from 'react-router-dom';

const MoreMenu = ({ onClick }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const baseUrl = 'https://api.mandarin.weniv.co.kr';

  const [myInfo, setMyInfo] = useState(null);
  useEffect(() => {
    const getMyInfo = async () => {
      const reqUrl = baseUrl + '/user/myinfo';
      const res = await fetch(reqUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await res.json();
      //accountname 임시로 로컬에 저장- > 로그인시 저장하도록 수정해야함
      localStorage.setItem('accname', json.user.accountname);
      setMyInfo(json);
    };
    getMyInfo();
  }, []);

  //내정보 수정 핸들러
  const handleProfileEdit = (e) => {
    e.preventDefault();
    navigate('/mypage/edit');
    navigate('/mypage/edit', {
      state: {
        id: myInfo.user.accountname,
        beforeImg: myInfo.user.image,
        beforeNickname: myInfo.user.username,
      },
    });
  };

  //로그아웃 핸들러
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem('token', '');
    localStorage.setItem('accname', '');
    localStorage.setItem('otherName', '');
    navigate('/login');
  };

  return (
    <div className={styles['moremenu-container']} onClick={onClick}>
      <ul className={styles['moremenu-list']}>
        <li className={styles['moremenu-list-obj']}>
          <a
            href="#"
            onClick={(e) => {
              handleProfileEdit(e);
            }}
          >
            <i className="icon icon-setting" />내 프로필 수정
          </a>
        </li>
        <li className={styles['moremenu-list-obj']}>
          <a
            href="#"
            className={styles.logout}
            onClick={(e) => {
              handleLogout(e);
            }}
          >
            <i className="icon icon-lock-g" />
            로그아웃
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MoreMenu;
