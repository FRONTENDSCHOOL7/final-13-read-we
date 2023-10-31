import React from 'react';
import { useNavigate } from 'react-router-dom';
// 메인페이지 좌측 네비게이션 버튼
const MainNavBtn = ({ className }) => {
  const navigate = useNavigate();
  return (
    <ul className={`home-nav ${className}`}>
      <li>
        <a href="#" className="home-nav-list active">
          <i className="icon icon-home"></i>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="home-nav-list"
          onClick={(e) => {
            e.preventDefault(); // 기본 링크 동작을 막습니다.
            navigate('/chat');
          }}
        >
          <i className="icon icon-chat"></i>
          <span>Chat</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="home-nav-list"
          onClick={(e) => {
            e.preventDefault(); // 기본 링크 동작을 막습니다.
            navigate('/bookmark');
          }}
        >
          <i className="icon icon-book"></i>
          <span>Bookmark</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="home-nav-list"
          onClick={(e) => {
            e.preventDefault(); // 기본 링크 동작을 막습니다.
            navigate('/mypage');
          }}
        >
          <i className="icon icon-my"></i>
          <span>My Page</span>
        </a>
      </li>
    </ul>
  );
};

export default MainNavBtn;
