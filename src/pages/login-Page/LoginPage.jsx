import React, { useState } from 'react';
import styles from './css/Login.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IconIpt } from '../../components/input/IptStyleEtc';
import { BasicIpt } from '../../components/input/IptStyle';
import { BasicBtn } from '../../components/button/BtnStyle';
import axios from 'axios';

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
    const reqUrl = 'https://api.mandarin.weniv.co.kr/user/login';
    const loginData = {
      user: {
        email: email,
        password: password,
      },
    };
    // axios post 요청
    axios
      .post(reqUrl, loginData)
      .then((res) => {
        // 로그인 성공 - 로그인해서 토큰 꺼내기
        const token = res.data.user.token;
        const email = res.data.user.email;

        // 토큰 및 이메일 로컬 스토리지에 저장
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        console.log('로그인 성공! 토큰 및 이메일 아이디 저장됨');

        navigate('/main', { state: { email } });
      })
      .catch((error) => {
        // 에러 핸들링
        console.error(
          '로그인 실패:',
          error.response.status,
          error.response.statusText,
        );
        alert('로그인 실패했습니다. 사용자 이름 또는 비밀번호를 확인하세요.');
      });
  };

  return (
    <div className={styles.pageWrap}>
      <div className={styles.contentArea}>
        <section className={styles['login-info']}>
          <h2 className={styles['title-box']}>
            <img
              src={process.env.PUBLIC_URL + '/icon/READWE.svg'}
              alt="READ WE"
            />
          </h2>
          <form className={styles['input-box']} onSubmit={submitLogin}>
            <IconIpt>
              <BasicIpt
                type="text"
                placeholder="아이디"
                value={email}
                onChange={inputEmail}
              />
              <i className="icon icon icon-user-g" />
            </IconIpt>
            <IconIpt>
              <BasicIpt
                placeholder="비밀번호"
                type="password"
                value={password}
                onChange={inputPassword}
                required
              />
              <i className="icon icon icon-lock-g" />
            </IconIpt>
            <label className={styles['login-check']}>
              <input type="checkbox" />
              <span className={styles['check-icon']} />
              <span className={styles['check-text']}> 로그인 상태 유지</span>
            </label>
            <BasicBtn type="submit">로그인</BasicBtn>
          </form>
        </section>
        <section className={styles['login-etc']}>
          <h3 className="a11y-hidden">비밀번호 찾기, 간편 로그인</h3>
          <div className={styles['find-id-join']}>
            <p>아이디 찾기 | 비밀번호 찾기</p>
            <div>
              아직 계정이 없으신가요?
              <Link to="/join" className={styles.logintojoin}>
                회원가입하기
              </Link>
            </div>
          </div>
          <div className={styles['other-acc']}>
            <h4 className={styles.title}>또는 다른 서비스 계정으로 로그인</h4>
            <ul className={styles['other-acc-list']}>
              <li className={styles['list-obj']}>
                <button className={styles['email-image']} />
              </li>
              <li className={styles['list-obj']}>
                <button className={styles['kakao-image']} />
              </li>
              <li className={styles['list-obj']}>
                <button className={styles['naver-image']} />
              </li>
            </ul>
            <span className={styles['other-acc-info']}>
              * SNS계정으로 간편하게 가입하여 서비스를 이용하실 수 있습니다.
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
