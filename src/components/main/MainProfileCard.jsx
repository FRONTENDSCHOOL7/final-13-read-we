import React from 'react';
// 메인 프로필카드섹션

const MainProfileCard = (props) => {
  return (
    <div className="acc-bar">
      <div className="acc-img">
        <img alt="프로필 이미지" src={`/images/${props.imgSrc}`} />
      </div>
      <div className="acc-text">
        <strong className="acc-id">{props.userName}</strong>
        <span className="acc-email">{props.userEmail}</span>
      </div>
      <button type="button">
        <i className="icon icon-dot" />
      </button>
    </div>
  );
};

export default MainProfileCard;
