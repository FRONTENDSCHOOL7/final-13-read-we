import React from 'react';
import { useNavigate } from 'react-router-dom';
// 메인 프로필카드섹션

const MainProfileCard = (props) => {
  const navigate = useNavigate();
  const handelMypage = (e) => {
    e.preventDefault();
    navigate('/mypage');
  };
  return (
    <div className="acc-bar">
      <div className="acc-img">
        <img
          alt="프로필 이미지"
          src={props.img}
          // 이 정규식은 문자열에서 마지막 슬래시를 포함하여 그 이전의 모든 문자열을 제거함.
        />
      </div>
      <div className="acc-text">
        <strong className="acc-id">{props.userName}</strong>
        <span className="acc-email">{props.userEmail}</span>
      </div>
      <button
        type="button"
        onClick={(e) => {
          handelMypage(e);
        }}
      >
        <i className="icon icon-dot" />
      </button>
    </div>
  );
};

export default MainProfileCard;
