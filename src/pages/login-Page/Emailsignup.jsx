import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Login.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    const reqUrl = 'https://api.mandarin.weniv.co.kr/user/login';
    const emailLoginData = {
      user: {
        email: email,
        password: password,
      },
    };
    // fetch post 요청
    // axios post 요청
    try {
      const res = await axios.post(reqUrl, emailLoginData);

      // 로그인 성공 - 로그인해서 토큰 꺼내기
      const token = res.data.user.token;

      //유저 네임 가져옴
      const email = res.data.user.email;

      // 토큰 및 이메일 로컬 스토리지에 저장
      localStorage.setItem('token', token);
      // localStorage.setItem('email', email);
      // localStorage.setItem('password', password);
      console.log('로그인 성공! 토큰 저장됨:', token);

      // 로그인 성공 후 main 페이지로 이동
      navigate('/main');
    } catch (error) {
      // 오류발생
      console.error('로그인 요청 오류:', error);
      alert('로그인 요청에 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <Header />
      <div className={styles['login-container']}>
        <div className={styles['login-Image']} />
        <form onSubmit={submitEmailLogin}>
          <input
            className={`${styles['input-box']}${styles.email}`} // 이메일 입력란
            type="text"
            placeholder="이메일"
            value={email}
            onChange={inputEmail}
            required
          />
          <br />

          <label />
          <input
            className={`${styles['input-box']}${styles.pw}`}
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={inputPassword}
            required
          />
          <br />

          <label>
            <input type="checkbox" className={styles.check_btn} />
            <span> 로그인 상태 유지</span>
          </label>
          <button className={styles.Loginbutton} type="submit">
            이메일 로그인
          </button>
        </form>
        <p className={styles['Find-Id']}>아이디 찾기 | 비밀번호 찾기</p>
        <div className={styles['account-box']}>
          아직 계정이 없으신가요?
          <Link to="/join">회원가입하기</Link> {/* 회원가입 페이지로 이동 */}
        </div>
        <div className={`${styles['account-box']}${styles['id-login']}`}>
          <Link to="/login">아이디 로그인</Link> {/* 회원가입 페이지로 이동 */}
        </div>
      </div>
      <div className={styles.Footer} style={{ marginTop: '50%' }}>
        <Footer />
      </div>
    </>
  );
}
