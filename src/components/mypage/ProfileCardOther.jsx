import React from 'react';
import ProfileInfo from './ProfileInfo';
import { BasicBtn } from '../button/BtnStyle';
import { useNavigate } from 'react-router-dom';

//다른 계정 마이페이지 프로필 카드
const ProfileCardOther = (props) => {
  const navigate = useNavigate();
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
      alert(`${props.userName}님 팔로우가 완료 되었습니다 🥰`);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
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
      alert(`${props.userName}님 팔로우가 해제 되었습니다 🥲`);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
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
        orderAcc={true}
      />
      <div className="acc-btn-wrap">
        {props.isfollowing ? (
          <BasicBtn onClick={unfollowingEvent}>팔로잉 해제</BasicBtn>
        ) : (
          <BasicBtn onClick={followingEvent}>팔로잉</BasicBtn>
        )}
        <BasicBtn>메시지</BasicBtn>
      </div>
    </article>
  );
};

export default ProfileCardOther;
