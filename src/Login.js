import React from 'react';
import './App.css';

export default function Login() {
  return (
    <div className="login-Box">
      <div className="login-Image"></div>
      <label className="input-label">
        <input type="text" placeholder="아이디" className="ex-wrap basic" />
      </label>
      <input type="text" placeholder="비밀번호" className="basic" />
      <input type="checkbox" id="check_btn" />
      <label for="check_btn">
        <span> 로그인 상태 유지</span>
      </label>
      <button type="button" className="ex-content button-Basic">
        로그인
      </button>
    </div>
  );
}
