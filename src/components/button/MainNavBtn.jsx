import React from 'react';
// 메인페이지 좌측 네비게이션 버튼
const MainNavBtn = () => {
  return (
    <ul class="home-nav">
      <li>
        <a href="#" class="home-nav-list active">
          <i class="icon icon-home"></i>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="#" class="home-nav-list">
          <i class="icon icon-chat"></i>
          <span>Chat</span>
        </a>
      </li>
      <li>
        <a href="#" class="home-nav-list">
          <i class="icon icon-book"></i>
          <span>Book</span>
        </a>
      </li>
      <li>
        <a href="#" class="home-nav-list">
          <i class="icon icon-my"></i>
          <span>My Page</span>
        </a>
      </li>
    </ul>
  );
};

export default MainNavBtn;
