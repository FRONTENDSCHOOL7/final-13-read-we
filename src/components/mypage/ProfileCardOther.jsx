import React from 'react';
import ProfileInfo from './ProfileInfo';
import { BasicBtn } from '../button/BtnStyle';

//다른 계정 마이페이지 프로필 카드
const ProfileCardOther = (props) => {
  //1. API 요청 보내기
  const accName = props.userAccName;
  const token = localStorage.getItem('token');

  //팔로우 API 호출
  const followingFn = async (accName) => {
    const reqUrl = `/profile/${accName}/follow`;
    const baseUrl = 'https://api.mandarin.weniv.co.kr';
    try {
      const res = await fetch(baseUrl + reqUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      alert('팔로우 성공!!!!');
    } catch (error) {
      console.error('팔로우 실패:', error);
    }
  };
  //팔로우 클릭 이벤트
  const followingEvent = () => {
    followingFn(accName);
  };

  //언팔로우 API 호출
  const unfollowingFn = async (accName) => {
    const reqUrl = `/profile/${accName}/unfollow`;
    const baseUrl = 'https://api.mandarin.weniv.co.kr';
    try {
      const res = await fetch(baseUrl + reqUrl, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      alert('언팔로우 성공!!!!');
    } catch (error) {
      console.error('팔로우 실패:', error);
    }
  };
  //언팔로우 클릭 이벤트
  const unfollowingEvent = () => {
    unfollowingFn(accName);
  };

  return (
    <article className="acc-card">
      <ProfileInfo
        imgSrc={props.imgSrc}
        userName={props.userName}
        userEmail={props.userEmail}
        follower={props.follower}
        following={props.following}
        // page={() => {navigate('/mypage/acclist')}}
      />
      <div className="acc-btn-wrap">
        {props.isfollowing ? (
          <BasicBtn onClick={unfollowingEvent}>언팔로잉</BasicBtn>
        ) : (
          <BasicBtn onClick={followingEvent}>팔로잉</BasicBtn>
        )}
        <BasicBtn>메시지</BasicBtn>
      </div>
    </article>
  );
};

export default ProfileCardOther;
