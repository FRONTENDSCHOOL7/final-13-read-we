import React from 'react';
import Header from '../Header';
import './ProfileEdit.css';
import ProfileInfoSetting from '../components/mypage/ProfileInfoSetting';

const ProfileEdit001 = () => {
  //코파일럿이 알려준 비밀번호가 일치하지 않을때 '비밀번호가 일치하지 않습니다!' 라는 메세지를 띄우는 코드

  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [showError, setShowError] = useState(false);

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleConfirmPasswordChange = (event) => {
  //   setConfirmPassword(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (password !== confirmPassword) {
  //     setShowError(true);
  //   } else {
  //     setShowError(false);
  //     // 비밀번호가 일치할 때의 처리
  //   }
  // };
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

      {
        /* 닉네임 인풋창 삽입 */
        <input type="text" placeholder="닉네임" className="basic gray" />
      }
      <p>7자 이내로 입력하세요</p>

      {
        /* 1차 비밀번호 인풋창 삽입 */
        <div className="input-icon">
          <i className="icon icon-lock-w"></i>
          <input
            type="text"
            placeholder="비밀번호 입력"
            className="basic gray"
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
          />
        </div>
      }
      <p className="wroung-num">비밀번호가 다릅니다!</p>

      <div className="btn-parent">
        {
          /* 확인 버튼 삽입 */
          <button type="button" className="basic md">
            확인
          </button>
        }
      </div>
    </div>
  );
};

export default ProfileEdit001;
