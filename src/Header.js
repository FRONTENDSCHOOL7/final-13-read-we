import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="header-Container">
        <div className="logo-Image"></div>
        <div className="container-Link">
          <a href="http//www.naver.com">HOME</a>
          <a>Contact</a>
          <a>Services</a>
          <a>Features</a>
          <a>About Us</a>
        </div>
        <button class="btn-allmenu" type="button">
          <span class="a11y-hidden">전체 메뉴 열기</span>
          <span class="line">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>
  );
}
