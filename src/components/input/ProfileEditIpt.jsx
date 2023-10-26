import React from 'react';
import { BasicIpt } from './IptStyle';
import { LabelIpt } from './IptStyleEtc';

const ProfileEditIpt = () => {
  return (
    <>
      <BasicIpt gray="true" placeholder="회색 인풋" />
      <LabelIpt>
        <BasicIpt placeholder="닉네임" />
        7자 이내로 입력하세요
      </LabelIpt>
      <BasicIpt gray="true" placeholder="비밀번호" />
      <LabelIpt>
        <BasicIpt placeholder="비밀번호 확인" />
        영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리
      </LabelIpt>
    </>
  );
};

export default ProfileEditIpt;
