import React, { useState } from 'react';
import styled from 'styled-components';

//프로필 설정페이지 프로필 정보 표시
const ProfileInfoSetting = (props) => {
  //상태 변수 추가
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null); // 추가

  // 파일 선택 핸들러 추가
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file)); // 추가
  };

  // 제출 핸들러에서 파일 업로드 로직 추가
  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('https://api.mandarin.weniv.co.kr', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  // 이미지 스타일 추가
  const ImagePreview = styled.img`
    border-radius: 40%;
    width: 200px;
    height: 200px;
  `;

  // 사진변경 버튼에 스타일을 입히고 싶은 간절한 코드
  const FileInput = styled.input`
    display: none;
  `;
  const FileInputLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.wid || '100px'};
    height: 40px;
    padding: 0 15px;
    background-color: ${(props) => props.bgcolor || `#000`};
    color: #fff;
    text-align: center;
    font-size: 16px;
    border-radius: ${(props) => props.round || `10px`};
    box-shadow: ${(props) =>
      props.shadow || `0px 0px 4px 0px rgba(0, 0, 0, 0.25)`};
    font-weight: ${(props) => props.weight};
    ${(props) =>
      props.linestyle &&
      `color: #555;
   background-color: #fff;
   border: 1px solid #d9d9d9;`}
    ${(props) =>
      props.xsm &&
      `height: 24px;
   font-size: 12px;`}
  ${(props) =>
      props.sm &&
      `height: 24px;
   font-size: 12px;`}
  ${(props) =>
      props.md &&
      `height: 45px;
   font-size: 14px;`}
  cursor: pointer;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column; //상하로
    justify-content: center;
    align-items: center;
  `;

  // 파일 입력 요소 추가
  return (
    <div className="acc-info">
      <div className="acc-img">
        <ImagePreview
          alt="프로필 이미지"
          src={preview ? preview : `/images/${props.imgSrc}`}
        />
      </div>
      <Container>
        <FileInput
          id="file"
          type="file"
          onChange={(event) => {
            handleFileChange(event);
            handleUpload();
          }}
        />
        {selectedFile && <p>선택된 파일: {selectedFile.name}</p>}
        <FileInputLabel htmlFor="file">파일 선택</FileInputLabel>
      </Container>
      <strong className="acc-id">{props.userName}</strong>
      <span className="acc-email">{props.userEmail}</span>
    </div>
  );
};

export default ProfileInfoSetting;
