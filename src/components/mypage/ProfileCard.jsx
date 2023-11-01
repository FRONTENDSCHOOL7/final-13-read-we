import React from 'react';
import ProfileInfo from './ProfileInfo';
import { BasicBtn } from '../button/BtnStyle';
import { IconBtn } from '../button/BtnStyleEtc';
import { useNavigate } from 'react-router-dom';

//마이페이지 프로필 카드
const ProfileCard = (props) => {
  const navigate = useNavigate();
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
        page={() => {
          navigate('/mypage/acclist');
        }}
      />
      <div className="acc-btn-wrap">
        <BasicBtn>도움말</BasicBtn>
        <BasicBtn
          onClick={() => {
            navigate('/mypage/library');
          }}
        >
          내 서재
        </BasicBtn>
      </div>
    </article>
  );
};

export default ProfileCard;
