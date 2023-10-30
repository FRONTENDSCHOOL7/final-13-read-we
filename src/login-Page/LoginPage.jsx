import React, { useState } from 'react';
import './Login.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === '사용자명' && password === '비밀번호') {
      alert('로그인 성공!');
    } else {
      alert('로그인 실패. 사용자 이름 또는 비밀번호를 확인하세요.');
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <label>id</label>
        <input
          className="input-box"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />

        <label>password</label>
        <input
          className="input-box"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button className="Loginbutton" type="submit">
          로그인
        </button>
      </form>
    </div>
  );
}
