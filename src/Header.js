import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="header-Container">
        <div className="logo-Image"></div>
        <div className="container-Link">
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate('/main');
            }}
          >
            HOME
          </a>
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
