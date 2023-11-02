import React, { useState } from 'react';
import Header from '../Header';
import ProfileInfoSetting from '../components/mypage/ProfileInfoSetting';
// import { database } from '../join-Page/JoinPage';

const ProfileEdit = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatching, setIsPasswordMatching] = useState(false);

  //입력 핸들러 추가
  const handleNicknameChange = (event) => {
    if (event.target.value.length > 7) {
      return;
    }
    setNickname(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // // 사용자 ID 검사 함수 추가
  // const checkUserId = async (userId) => {
  //   // 데이터베이스에서 사용자 ID를 검색
  //   const user = await database.findUserById(userId);

  //   // 사용자 ID가 이미 존재하면 알림 표시
  //   if (user) {
  //     alert('사용중인 ID입니다.');
  //     return;
  //   }

  //   // 사용자 ID가 존재하지 않으면 계속 진행
  //   if (!user) {
  //     // 사용자 정보를 데이터베이스에 저장
  //     await database.saveUser({
  //       id: userId,
  //       nickname: nickname,
  //       password: password,
  //     });
  //     alert('회원가입이 완료되었습니다.');
  //   }
  // };

  // 비밀번호와 비밀번호 확인이 일치하는지 확인
  React.useEffect(() => {
    setIsPasswordMatching(password === confirmPassword && password !== '');
  }, [password, confirmPassword]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');
    fetch('https://api.mandarin.weniv.co.kr', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: nickname,
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
  };

  return (
    <div>
      <Header />
      <h1
        style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '2em' }}
        className="edit-profile"
      >
        프로필 수정
      </h1>

      <div className="parent">
        {/* 유저 프로필 사진 삽입 + 닉네임 노출 */}
        <ProfileInfoSetting />
      </div>

      {/* 닉네임 입력 필드 */}
      <input
        type="text"
        placeholder="닉네임"
        className="basic gray"
        value={nickname}
        onChange={handleNicknameChange}
        style={{ marginBottom: '10px' }}
      />
      <p> 닉네임은 한글, 영문, 숫자만 가능합니다.</p>
      <p> 7자 이내로 입력하세요</p>

      {/* 1차 비밀번호 입력 필드 */}
      <input
        type="password"
        placeholder="비밀번호"
        className="basic gray"
        onChange={handlePasswordChange}
        style={{ marginTop: '30px' }}
      />

      {/* 2차 비밀번호 입력 필드 */}
      <input
        type="password"
        placeholder="비밀번호 확인"
        className="basic gray"
        onChange={handleConfirmPasswordChange}
        style={{ marginTop: '20px' }}
      />

      {isPasswordMatching && <p>비밀번호가 일치합니다.</p>}

      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: '#E87C3E',
          border: 'none',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'block',
          fontSize: '16px',
          margin: '50px auto',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      >
        제출
      </button>
    </div>
  );
};

export default ProfileEdit;
