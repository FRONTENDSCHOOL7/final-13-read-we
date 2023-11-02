import React, { useState } from 'react';
import './Login.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export default function LoginPage() {
  // input 요소 상태
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); // 새로운 상태 변수

  // 서버 전달값 셋팅
  const inputUsername = (e) => {
    setUsername(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  // 이메일 입력 상태 업데이트
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };

  // 서버 제출
  const submitLogin = (e) => {
    // 새로 고침 막음
    e.preventDefault();
    loginFn(username, password, email);
  };

  const loginFn = async (username, password, email) => {
    const reqUrl = 'https://api.mandarin.weniv.co.kr';
    const reqPath = '/user/login';
    const loginData = {
      user: {
        username: username,
        password: password,
      },
    };
    // fetch post 요청
    try {
      const res = await fetch(reqUrl + reqPath, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (res.ok) {
        // 로그인 성공 - 로그인해서 토큰 꺼내기
        const json = await res.json();
        console.log(json);
        const token = json.user.token;
        console.log(token);

        // 토큰 및 이메일 로컬 스토리지에 저장
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email); // 이메일 저장
        console.log('로그인 성공! 토큰 및 이메일 저장됨:', token);
      }
      // 에러 핸들링
      else {
        console.error('로그인 실패:', res.status, res.statusText);
        alert('로그인 실패했습니다. 사용자 이름 또는 비밀번호를 확인하세요.');
      }
    } catch (error) {
      // 오류발생
      console.error('로그인 요청 오류:', error);
      alert('로그인 요청에 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <Header></Header>
      <div className="login-container">
        <div className="login-Image"></div>
        <form onSubmit={submitLogin}>
          <label></label>
          <input
            className="input-box id"
            type="text"
            placeholder="아이디"
            value={email}
            onChange={inputUsername}
            required
          />
          <br />

          <label></label>
          <input
            className="input-box pw"
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={inputPassword}
            required
          />
          <br />

          <input type="checkbox" id="check_btn" />
          <label for="check_btn">
            <span> 로그인 상태 유지</span>
          </label>
          <button className="Loginbutton" type="submit">
            로그인
          </button>
        </form>
        <p className="Find-Id">아이디 찾기 | 비밀번호 찾기</p>
        <div className="account-box">
          아직 계정이 없으신가요?
          <a link="#">회원가입하기</a>
        </div>
      </div>
      <div className="Footer" style={{ marginTop: '50%' }}>
        <Footer></Footer>
      </div>
    </>
  );
}
