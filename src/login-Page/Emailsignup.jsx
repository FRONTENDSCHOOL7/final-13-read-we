import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

export default function Emailsignup() {
  // input 요소 상태
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // 서버 전달값 셋팅
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  // 서버 제출
  const submitEmailLogin = (e) => {
    e.preventDefault();
    emailLoginFn(email, password);
  };

  const emailLoginFn = async (email, password) => {
    const reqUrl = 'https://api.mandarin.weniv.co.kr';
    const reqPath = '/user/login';
    const emailLoginData = {
      user: {
        email: email,
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
        body: JSON.stringify(emailLoginData),
      });

      if (res.ok) {
        // 로그인 성공 - 로그인해서 토큰 꺼내기
        const json = await res.json();
        console.log(json);
        const token = json.user.token;
        console.log(token);

        //유저 네임 가져옴
        const email = json.user.email;

        // 토큰 및 이메일 로컬 스토리지에 저장
        localStorage.setItem('token', token);
        // localStorage.setItem('email', email);
        // localStorage.setItem('password', password);
        console.log('로그인 성공! 토큰 저장됨:', token);

        // 로그인 성공 후 main 페이지로 이동
        navigate('/main');
      }
      // 에러 핸들링
      else {
        console.error('로그인 실패:', res.status, res.statusText);
        alert('로그인 실패했습니다. 이메일 주소 또는 비밀번호를 확인하세요.');
      }
    } catch (error) {
      // 오류발생
      console.error('로그인 요청 오류:', error);
      alert('로그인 요청에 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <div className="login-Image"></div>
        <form onSubmit={submitEmailLogin}>
          <label></label>
          <input
            className="input-box email" // 이메일 입력란
            type="text"
            placeholder="이메일"
            value={email}
            onChange={inputEmail}
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
          <label htmlFor="check_btn">
            <span> 로그인 상태 유지</span>
          </label>
          <button className="Loginbutton" type="submit">
            이메일 로그인
          </button>
        </form>
        <p className="Find-Id">아이디 찾기 | 비밀번호 찾기</p>
        <div className="account-box">
          아직 계정이 없으신가요?
          <Link to="/join">회원가입하기</Link> {/* 회원가입 페이지로 이동 */}
        </div>
        <div className="account-box id-login">
          <Link to="/login">아이디 로그인</Link> {/* 회원가입 페이지로 이동 */}
        </div>
      </div>
      <div className="Footer" style={{ marginTop: '50%' }}>
        <Footer />
      </div>
    </>
  );
}
