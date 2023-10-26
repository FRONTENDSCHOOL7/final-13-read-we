import React from 'react';
import { BasicBtn } from '../button/BtnStyle';

//프로필 설정페이지 프로필 정보 표시
const ProfileInfoSetting = (props) => {
  return (
    <div className="acc-info">
      <div className="acc-img">
        <img alt="프로필 이미지" src={`/images/${props.imgSrc}`} />
      </div>
      <BasicBtn md="true">사진 변경</BasicBtn>
      <strong className="acc-id">{props.userName}</strong>
      <span className="acc-email">{props.userEmail}</span>
    </div>
  );
};

export default ProfileInfoSetting;
