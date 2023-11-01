import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import SuccessPopup from './SuccessPopup'; // 팝업 컴포넌트를 불러옵니다.
import './JoinPage.css';

export default function JoinPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // 팝업 상태를 추가

  // 회원가입 정보를 로컬 스토리지에 저장하는 함수
  const saveRegistrationInfo = () => {
    // 회원가입 정보를 객체로 만들어서 로컬 스토리지에 저장
    const registrationInfo = {
      nickname,
      email,
      username,
      password,
      // 다른 필요한 정보도 여기에 추가 가능
    };

    // JSON 형태로 로컬 스토리지에 저장
    localStorage.setItem('registrationInfo', JSON.stringify(registrationInfo));
    console.log('가입 정보:', registrationInfo); // 정보를 콘솔에 출력
  };

  const handleJoin = () => {
    // 회원가입 로직을 구현하고 상태를 업데이트합니다.
    // 예를 들어, 서버로 요청을 보내고 응답을 처리하는 코드를 작성합니다.

    // 서버로 회원가입 요청을 보낸 후, 응답에서 사용자 정보를 받아온다고 가정
    // 이후 회원가입 정보를 로컬 스토리지에 저장
    saveRegistrationInfo();

    // 가입 완료 팝업 표시
    setShowSuccessPopup(true);
  };

  const handleInputChange = (event, field) => {
    const value = event.target.value;

    // 입력 필드가 변경될 때마다 상태를 업데이트
    switch (field) {
      case 'nickname':
        setNickname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }

    // 모든 필수 필드가 비어있지 않으면 가입 버튼을 활성화
    if (nickname && email && username && password && confirmPassword) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const isCompleted = (field) => {
    // 입력이 활성화되었는지 여부를 확인하고 CSS 클래스를 반환합니다.
    switch (field) {
      case 'nickname':
        return !!nickname;
      case 'email':
        return !!email;
      case 'username':
        return !!username;
      case 'password':
        return !!password;
      case 'confirmPassword':
        return !!confirmPassword;
      default:
        return false;
    }
  };

  const closePopup = () => {
    // 팝업 닫기
    setShowSuccessPopup(false);
  };

  console.log(`'showSuccessPopup:'`, showSuccessPopup);

  return (
    <>
      <Header></Header>
      <section>
        <div className="join-Box">
          <h1>리드위 회원가입</h1>
          <h3 className="join-ment">
            아이디와 이메일로 간편하게 리드위를 시작하세요!
          </h3>
          <div
            className={`input-icon 
            ${isCompleted('nickname') ? 'active-input' : ''}`}
          >
            <i className="icon icon-user-w"></i>
            <input
              type="nickname"
              placeholder="닉네임"
              className="basic gray"
              value={nickname}
              onChange={(e) => handleInputChange(e, 'nickname')}
            />
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
              onChange={(e) => handleInputChange(e, 'email')}
            />
          </div>
          <div
            className={`input-icon 
            ${isCompleted('username') ? 'active-input' : ''}`}
          >
            <i className="icon icon-user-w"></i>
            <input
              type="text"
              placeholder="아이디"
              className="basic gray"
              value={username}
              onChange={(e) => handleInputChange(e, 'username')}
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
              onChange={(e) => handleInputChange(e, 'password')}
            />
          </div>
          <div
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
          </div>
          <button
            type="submit"
            className="join-basic"
            disabled={isButtonDisabled}
            onClick={handleJoin}
          >
            가입하기
          </button>
        </div>
      </section>
      <Footer></Footer>
      {showSuccessPopup && <SuccessPopup onClose={closePopup} />}
      {/* 팝업 표시 */}
    </>
  );
}
