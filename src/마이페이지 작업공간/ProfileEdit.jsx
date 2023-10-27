import React, { useState } from 'react';
import Header from '../Header';
import './ProfileEdit.css';
import ProfileInfoSetting from '../components/mypage/ProfileInfoSetting';

const ProfileEdit = () => {
  //비밀번호가 일치하지 않을때 '비밀번호가 일치하지 않습니다!' 라는 메세지를 띄우는 코드

  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (event.target.value !== password) {
      setPasswordMessage('비밀번호가 다릅니다!');
    } else {
      setPasswordMessage('비밀번호가 일치합니다.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMessage('비밀번호가 다릅니다!');
    } else {
      setPasswordMessage('비밀번호가 일치합니다.');
    }
  };

  return (
    <div>
      <Header />
      <h1 className="edit-profile">프로필 수정</h1>

      <div className="parent">
        {
          /* 유저 프로필 사진 삽입 + 닉네임노출 */
          <ProfileInfoSetting />
        }
      </div>

      {/* 닉네임도 usestate가 필요함  */}
      {
        /* 닉네임 인풋창 삽입 */
        <input
          type="text"
          placeholder="닉네임"
          className="basic gray"
          onChange={handleNicknameChange}
        />
      }
      <p>7자 이내로 입력하세요</p>

      {
        /* 1차 비밀번호 인풋창 삽입 */
        <div className="input-icon">
          <i className="icon icon-lock-w"></i>
          <input
            type="text"
            placeholder="비밀번호를 입력하세요"
            className="basic gray"
            onChange={handlePasswordChange}
          />
        </div>
      }
      <p>영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리</p>

      {
        /* 2차 비밀번호 확인 인풋창 삽입 */
        <div className="input-icon">
          <i className="icon icon-lock-w"></i>
          <input
            type="text"
            placeholder="비밀번호 2차 확인"
            className="basic gray"
            onChange={handleConfirmPasswordChange}
          />
        </div>
      }
      <p className="wroung-num">{passwordMessage}</p>

      <div className="btn-parent">
        {
          /* 확인 버튼 삽입 */
          <button type="button" className="basic md" onClick={handleSubmit}>
            확인
          </button>
        }
      </div>
    </div>
  );
};

export default ProfileEdit;
