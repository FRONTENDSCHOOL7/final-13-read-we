import React, { useState } from 'react';
import Header from './Header';
import ProfileInfoSetting from '../components/mypage/ProfileInfoSetting';

const ProfileEdit = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  //상태 변수 추가
  const [accountName, setAccountName] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');

  //입력 핸들러 추가
  const handleAccountNameChange = (event) => {
    setAccountName(event.target.value);
  };

  const handleIntroChange = (event) => {
    setIntro(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMessage('비밀번호가 다릅니다!');
    } else {
      setPasswordMessage('비밀번호가 일치합니다.');

      const token = localStorage.getItem('token');
      fetch('https://api.example.com/user', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: nickname,
            accountname: accountName, // 사용자가 입력한 계정 이름으로 교체해야 합니다.
            intro: intro, // 사용자가 입력한 소개로 교체해야 합니다.
            image: image, // 사용자가 입력한 이미지 URL로 교체해야 합니다.
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.user) {
            alert('프로필이 성공적으로 업데이트 되었습니다');
            window.location.href = '/MainPage'; // 메인 페이지로 이동
          } else {
            alert('이미 사용중인 계정 ID입니다.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('프로필 업데이트에 실패하였습니다. 다시 시도해주세요.');
        });
    }
  };

  return (
    <div>
      <Header />
      <h1 className="edit-profile">프로필 수정</h1>

      <div className="parent">
        {/* 유저 프로필 사진 삽입 + 닉네임 노출 */}
        <ProfileInfoSetting />
      </div>

      {/* 계정 이름 입력 필드 */}
      <input
        type="text"
        placeholder="계정 이름"
        className="basic gray"
        onChange={handleAccountNameChange}
      />

      {/* 소개 입력 필드 */}
      <input
        type="text"
        placeholder="소개"
        className="basic gray"
        onChange={handleIntroChange}
      />

      {/* 이미지 URL 입력 필드 */}
      <input
        type="text"
        placeholder="이미지 URL"
        className="basic gray"
        onChange={handleImageChange}
      />

      {/* 닉네임 입력 필드 */}
      <input
        type="text"
        placeholder="닉네임"
        className="basic gray"
        onChange={handleNicknameChange}
      />
      <p>7자 이내로 입력하세요</p>

      <input
        type="password"
        placeholder="비밀번호"
        className="basic gray"
        onChange={handlePasswordChange}
      />

      <input
        type="password"
        placeholder="비밀번호 확인"
        className="basic gray"
        onChange={handleConfirmPasswordChange}
      />
      <p>{passwordMessage}</p>

      <button onClick={handleSubmit}>제출</button>
    </div>
  );
};

export default ProfileEdit;
