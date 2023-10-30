import React, { useState } from 'react';
import './Login.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   if (username === '사용자명' && password === '비밀번호') {
  //     alert('로그인 성공!');
  //   } else {
  //     alert('로그인 실패. 사용자 이름 또는 비밀번호를 확인하세요.');
  //   }
  // };

  //API에 요청 보내기
  const loginFn = async (username, password) => {
    const reqPath = '/user/login';
    const reqUrl = 'https://api.mandarin.weniv.co.kr';

    //1. API에 보낼 로그인 정보 셋팅
    const loginData = {
      user: {
        email: username,
        password: password,
      },
    };
    //2. API에 로그인 정보 기반으로 로그인 요청하기
    try {
      const res = await fetch(reqUrl + reqPath, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      //3. 토큰 꺼내기
      const json = await res.json();
      const token = json.user.token;
      console.log('로그인 성공!!!!');
    } catch (error) {
      console.error('로그인 요청 오류:', error);
      alert('로그인 요청에 오류가 발생했습니다.');
    }
  };

  const submitLogin = (e) => {
    //submit이벤트 제거
    e.preventDefault();
    loginFn(username, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={submitLogin}>
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
