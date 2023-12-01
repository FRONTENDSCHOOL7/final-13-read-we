import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProfileInfo from './ProfileInfo';
import { BasicBtn } from '../button/BtnStyle';

//다른 계정 마이페이지 프로필 카드
const ProfileCardOther = (props) => {
  const navigate = useNavigate();
  const baseUrl = 'https://api.mandarin.weniv.co.kr';
  const token = localStorage.getItem('token');

  //팔로우 API
  const followingFn = async () => {
    const reqUrl = baseUrl + `/profile/${props.userAccName}/follow`;
    await axios
      .post(
        reqUrl,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(function (res) {
        alert(`${props.userName}님 팔로우가 완료 되었습니다 🥰`);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      })
      .catch(function (error) {
        alert('팔로우 실패:', error);
        console.error(error);
      });
  };

  //팔로우 클릭 이벤트
  const followingEvent = () => {
    followingFn();
  };

  //언팔로우 API
  const unfollowingFn = () => {
    const reqUrl = baseUrl + `/profile/${props.userAccName}/unfollow`;
    axios
      .delete(reqUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (res) {
        alert(`${props.userName}님 팔로우가 해제 되었습니다 🥲`);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      })
      .catch(function (error) {
        console.error(error);
        alert('팔로우 해제 실패:', error);
      });
  };

  //언팔로우 클릭 이벤트
  const unfollowingEvent = () => {
    unfollowingFn();
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
        <BasicBtn
          onClick={() => {
            navigate('/chat');
          }}
        >
          메시지
        </BasicBtn>
      </div>
    </article>
  );
};

export default ProfileCardOther;
