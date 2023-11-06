import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SuccessPopup from './SuccessPopup'; // 팝업 컴포넌트
import './JoinPage.css';
import { useNavigate } from 'react-router-dom';

export default function JoinPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [accountname, setAccountname] = useState('');
  const [password, setPassword] = useState('');
  const [imgSrc, serImgsrc] = useState(
    'http://api.mandarin.weniv.co.kr/Ellipse.png',
  );

  const navigate = useNavigate();

  // 회원가입 함수
  const join = async (joinData) => {
    const reqUrl = 'https://api.mandarin.weniv.co.kr/user';
    const res = await fetch(reqUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(joinData),
    });
    const json = await res.json();
    console.log(json);

    if (res.status === 200) {
      // 회원가입 성공 시 알림 메시지 표시
      alert('회원가입이 성공했습니다.');

      // 회원가입 성공 시 /join-success로 이동
      navigate('/join-success', { state: { username } }); // username을 state로 전달
    } else {
      // 회원가입 실패 시 알림 메시지 표시
      alert('회원가입에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  const inputUsername = (e) => {
    setUsername(e.target.value);
  };
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const inputAccountname = (e) => {
    setAccountname(e.target.value);
  };

  const onChangeImage = (e) => {};
  const submitJoin = (e) => {
    const joinData = {
      user: {
        username: username,
        email: email,
        password: password,
        accountname: accountname,
      },
    };
    join(joinData);
  };

  const isCompleted = (field) => {
    switch (field) {
      case 'accountname':
        return !!accountname;
      case 'email':
        return !!email;
      case 'username':
        return !!username;
      case 'password':
        return !!password;
      default:
        return false;
    }
  };

  return (
    <>
      <section>
        <div className="join-Box">
          <h1>리드위 회원가입</h1>
          <h3 className="join-ment">
            아이디와 이메일로 간편하게 리드위를 시작하세요!
          </h3>
          <div>
            <label>
              <img src={imgSrc} alt="" id="imagePre" />
            </label>
            <input type="file" id="profileImg" name="image" accept="image/*" />
          </div>
          <div
            className={`input-icon 
            ${isCompleted('email') ? 'active-input' : ''}`}
          >
            <i className="icon icon-email-w"></i>
            <input
              type="email"
              placeholder="이메일"
              className="basic gray"
              value={email}
              onChange={inputEmail}
            />
          </div>
          <div className="input-icon join-PW">
            <i className="icon icon-lock-w"></i>
            <input
              type="password"
              placeholder="비밀번호"
              className="basic gray"
              value={password}
              onChange={inputPassword}
            />
          </div>
          <div
            className={`input-icon 
            ${isCompleted('accountname') ? 'active-input' : ''}`}
          >
            <i className="icon icon-user-w"></i>
            <input
              type="text"
              placeholder="아이디"
              className="basic gray"
              value={accountname}
              onChange={inputAccountname}
            />
          </div>
          <div
            className={`input-icon 
            ${isCompleted('username') ? 'active-input' : ''}`}
          >
            <i className="icon icon-user-w"></i>
            <input
              type="text"
              placeholder="사용자 이름"
              className="basic gray"
              value={username}
              onChange={inputUsername}
            />
          </div>
          <button type="submit" className="join-basic" onClick={submitJoin}>
            가입하기
          </button>
        </div>
      </section>
    </>
  );
}
