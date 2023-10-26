import React from 'react';
import ProfileInfo from './ProfileInfo';
import { BasicBtn } from '../button/BtnStyle';

//다른 계정 마이페이지 프로필 카드
const ProfileCardOther = (props) => {
  return (
    <article className="acc-card">
      <ProfileInfo
        imgSrc={props.imgSrc}
        userName={props.userName}
        userEmail={props.userEmail}
        follower={props.follower}
        following={props.following}
      />
      <div className="acc-btn-wrap">
        <BasicBtn>팔로잉</BasicBtn>
        <BasicBtn>메시지</BasicBtn>
      </div>
    </article>
  );
};

export default ProfileCardOther;
