import React from 'react';

export default function Join() {
  return (
    <div className="join-Box">
      <h1>리드위 회원가입</h1>
      <h3>아이디와 이메일로 간편하게 티빙을 시작하세요!</h3>
      <div className="input-icon">
        <i className="icon icon-user-w"></i>
        <input type="text" placeholder="닉네임" className="basic gray" />
      </div>
      <p className="join-ment">
        영문 소문자 또는 영문 소문자, 숫자 조합 6~12 자리
      </p>
      <div className="input-icon">
        <i className="icon icon-user-w"></i>
        <input type="text" placeholder="아이디" className="basic gray" />
      </div>
      <p className="join-ment">
        영문 소문자 또는 영문 소문자, 숫자 조합 6~12 자리
      </p>
      <div className="input-icon join-PW">
        <i className="icon icon-lock-w"></i>
        <input type="text" placeholder="비밀번호" className="basic gray" />
      </div>
      <div className="input-icon">
        <i className="icon icon-lock-w"></i>
        <input type="text" placeholder="비밀번호 확인" className="basic gray" />
      </div>
      <p className="join-ment">
        영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리
      </p>
      <div className="input-icon">
        <i className="icon icon-email-w"></i>
        <input type="text" placeholder="이메일" className="basic gray" />
      </div>
      <button type="button" className="join-basic" disabled>
        가입하기
      </button>
    </div>
  );
}
