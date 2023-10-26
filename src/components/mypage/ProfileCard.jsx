import React from 'react';
import ProfileInfo from './ProfileInfo';
import { BasicBtn } from '../button/BtnStyle';
import { IconBtn } from '../button/BtnStyleEtc';

//마이페이지 프로필 카드
const ProfileCard = (props) => {
  return (
    <article className="acc-card">
      <IconBtn>
        <i className="icon icon-setting" />
        <strong>프로필 수정</strong>
      </IconBtn>
      <ProfileInfo
        imgSrc={props.imgSrc}
        userName={props.userName}
        userEmail={props.userEmail}
        follower={props.follower}
        following={props.following}
      />
      <div className="acc-btn-wrap">
        <BasicBtn>도움말</BasicBtn>
        <BasicBtn>내 서재</BasicBtn>
      </div>
    </article>
  );
};

export default ProfileCard;
