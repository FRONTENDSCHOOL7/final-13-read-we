import React, { useEffect, useState } from 'react';
// 메인 프로필카드섹션

const MainProfileCard = (props) => {
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem('token');
  const baseUrl = 'https://api.mandarin.weniv.co.kr';

  useEffect(() => {
    const getMyinfo = async () => {
      const reqUrl = baseUrl + '/user/myinfo';

      const res = await fetch(reqUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await res.json();
      setProfile(json);
    };
    getMyinfo();
  }, []);
  console.log(profile);
  console.log(profile.user.image);
  return (
    <div className="acc-bar">
      <div className="acc-img">
        <img
          alt="프로필 이미지"
          src={baseUrl + '/' + profile.user.image.replace(/^.*\//, '')}
          // 이 정규식은 문자열에서 마지막 슬래시를 포함하여 그 이전의 모든 문자열을 제거함.
        />
      </div>
      <div className="acc-text">
        <strong className="acc-id">{profile.user.username}</strong>
        <span className="acc-email">{props.userEmail}</span>
      </div>
      <button type="button">
        <i className="icon icon-dot" />
      </button>
    </div>
  );
};

export default MainProfileCard;
