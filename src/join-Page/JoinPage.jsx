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

  // const [confirmPassword, setConfirmPassword] = useState('');

  // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // const [showSuccessPopup, setShowSuccessPopup] = useState(false); // 팝업 상태를 추가
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
    // e.preventDefault();
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

  // // 회원가입 정보를 로컬 스토리지에 저장
  // const saveRegistrationInfo = () => {
  //   // 회원가입 정보를 객체로 만들어서 로컬 스토리지에 저장
  //   const registrationInfo = {
  //     accountname,
  //     email,
  //     username,
  //     password,
  //   };

  //   // JSON 형태로 로컬 스토리지에 저장
  //   localStorage.setItem('registrationInfo', JSON.stringify(registrationInfo));
  //   console.log('가입 정보:', registrationInfo); // 정보를 콘솔에 출력
  // };

  // const handleJoin = () => {
  //   saveRegistrationInfo();

  //   // 가입 완료 팝업 표시
  //   setShowSuccessPopup(true);
  // };

  // const handleInputChange = (event, field) => {
  //   const value = event.target.value;

  //   // 입력 필드가 변경될 때마다 상태를 업데이트
  //   switch (field) {
  //     case 'accountname':
  //       setAccountname(value);
  //       break;
  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'username':
  //       setUsername(value);
  //       break;
  //     case 'password':
  //       setPassword(value);
  //       break;
  //     default:
  //       break;
  //   }

  // 모든 필수 필드가 비어있지 않으면 가입 버튼을 활성화 && confirmPassword
  //   if (accountname && email && username && password) {
  //     setIsButtonDisabled(false);
  //   } else {
  //     setIsButtonDisabled(true);
  //   }
  // };

  const isCompleted = (field) => {
    // 입력이 활성화되었는지 여부를 확인하고 CSS 클래스를 반환
    switch (field) {
      case 'accountname':
        return !!accountname;
      case 'email':
        return !!email;
      case 'username':
        return !!username;
      case 'password':
        return !!password;
      // case 'confirmPassword':
      //   return !!confirmPassword;
      default:
        return false;
    }
  };

  // const closePopup = () => {
  //   // 팝업 닫기
  //   setShowSuccessPopup(false);
  // };

  // console.log(`'showSuccessPopup:'`, showSuccessPopup);

  return (
    <>
      <Header></Header>
      <section>
        <div className="join-Box">
          <h1>리드위 회원가입</h1>
          <h3 className="join-ment">
            아이디와 이메일로 간편하게 리드위를 시작하세요!
          </h3>
          <label>
            <img src={imgSrc} alt="" id="imagePre" />
          </label>
          <input type="file" id="profileImg" name="image" accept="image/*" />
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
          <div
            className={`input-icon join-PW
            ${isCompleted('password') ? 'active-input' : ''}`}
          >
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
          {/* <div
            className={`input-icon 
            ${isCompleted('confirmPassword') ? 'active-input' : ''}`}
          >
            <i className="icon icon-lock-w"></i>
            <input
              type="password"
              placeholder="비밀번호 확인"
              className="basic gray"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e, 'confirmPassword')}
            />
          </div> */}
          <button
            type="submit"
            className="join-basic"
            // disabled={isButtonDisabled}
            onClick={submitJoin}
          >
            가입하기
          </button>
        </div>
      </section>
      <Footer></Footer>
      {/* {showSuccessPopup && <SuccessPopup onClose={closePopup} />} */}
    </>
  );
}
