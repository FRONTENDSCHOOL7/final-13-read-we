import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
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

  // const inputEmail = (e) => {
  //   setPassword(e.target.value);
  // };

  // 서버 제출
  const submitLogin = (e) => {
    // 새로 고침 막음
    e.preventDefault();
    loginFn(email, password);
  };

  const loginFn = async (email, password) => {
    const reqUrl = 'https://api.mandarin.weniv.co.kr';
    const reqPath = '/user/login';
    const loginData = {
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
        body: JSON.stringify(loginData),
      });

      if (res.ok) {
        // 로그인 성공 - 로그인해서 토큰 꺼내기
        const json = await res.json();
        console.log(json);
        const token = json.user.token;
        console.log(token);

        const email = json.user.email;

        // 토큰 및 이메일 로컬 스토리지에 저장
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        console.log('로그인 성공! 토큰 및 이메일 아이디 저장됨:', token);

        navigate('/main', { state: { email } });
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
      <div className="login-container">
        <div className="login-Image"></div>
        <form onSubmit={submitLogin}>
          <label></label>
          <input
            className="input-box id"
            type="text"
            placeholder="아이디"
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
          <label for="check_btn">
            <span> 로그인 상태 유지</span>
          </label>
          <button className="Loginbutton" type="submit">
            로그인
          </button>
        </form>
        <p className="Find-Id">아이디 찾기 | 비밀번호 찾기</p>
        <div className="joinment-box">
          아직 계정이 없으신가요?
          <Link to="/join" className="logintojoin">
            회원가입하기
          </Link>
          {/* 회원가입 페이지로 이동 */}
        </div>
        <div className="line-container">
          <span className="login-line"></span>
        </div>
        <p className="account-box toemail">또는 다른 서비스 계정으로 로그인</p>
        <div className="account-box email-login">
          <Link className="email-image" to="/email-signup"></Link>
          <Link className="naver-image" to="/email-signup"></Link>
          <Link className="kakao-image" to="/email-signup"></Link>
          <Link className="icon1-image" to="/email-signup"></Link>
        </div>
        <div className="line-container">
          <span className="ment-1">
            * SNS계정으로 간편하게 가입하여 서비스를 이용하실 수 있습니다.
          </span>
        </div>
      </div>
      <div className="Footer" style={{ marginTop: '50%' }}></div>
    </>
  );
}
