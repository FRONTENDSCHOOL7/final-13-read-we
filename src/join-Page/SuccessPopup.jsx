import React from 'react';

export default function SuccessPopup({ onClose }) {
  return (
    <div className="success-popup">
      <h2>가입이 완료되었습니다!</h2>
      <p>회원가입이 성공적으로 완료되었습니다.</p>
      <button onClick={onClose}>닫기</button>
    </div>
  );
}
