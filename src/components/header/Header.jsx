import React from 'react';
import '../header/Header.css';

export default function Header() {
  return (
    <header>
      <div className="header-Container">
        {/* <div className="logo-Image"> */}
        <h1 className="logo-Image">
          <a href="#">
            <img src="icon/READWE.svg" alt="#"></img>
          </a>
        </h1>
        {/* </div> */}
        <nav className="container-Link">
          <a href="#">HOME</a>
          <a href="#">Contact</a>
          <a href="#">Services</a>
          <a href="#">Features</a>
          <a href="#">About Us</a>
        </nav>
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
