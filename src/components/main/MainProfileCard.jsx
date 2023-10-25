import React from 'react';
// 메인 프로필카드섹션
const MainProfileCard = () => {
  return (
    <div class="acc-bar">
      <div class="acc-img">
        <img alt="프로필 이미지" src="/images/icon/testProfile.png" />
      </div>
      <div class="acc-text">
        <strong class="acc-id">mewmew</strong>
        <span class="acc-email">testID.test.com</span>
      </div>
      <button type="button">
        <i class="icon icon-dot"></i>
      </button>
    </div>
  );
};

export default MainProfileCard;
