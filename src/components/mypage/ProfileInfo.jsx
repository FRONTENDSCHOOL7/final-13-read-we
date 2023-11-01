import React from 'react';
import { CounterAccBtn } from '../button/BtnStyleEtc';
import { useNavigate } from 'react-router-dom';

//마이페이지 프로필 정보(이미지, 닉네임, 이메일)
function ProfileInfo(props) {
  const navigate = useNavigate();
  return (
    <div className="acc-info">
      <div className="acc-img">
        <img alt="프로필 이미지" src={props.imgSrc} />
      </div>
      <strong className="acc-id">{props.userName}</strong>
      <span className="acc-email">{props.userEmail}</span>
      <div className="acc-counter-wrap" onClick={props.page}>
        <CounterAccBtn type="팔로워" count={props.follower} />
        <CounterAccBtn type="팔로잉" count={props.following} />
      </div>
    </div>
  );
}

export default ProfileInfo;
