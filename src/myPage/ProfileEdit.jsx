import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './css/myPage.module.css';
import '../myPage/ProfileEdit.css';

const ProfileEdit = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const [nickname, setNickname] = useState(location.state.beforeNickname);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatching, setIsPasswordMatching] = useState(false);

  const [imgSrc, setImgSrc] = useState(null);
  const [preview, setPreview] = useState(location.state.beforeImg);
  const [id, setId] = useState('account_test93');

  const [uploadedFileName, setUploadedFileName] = useState(null);

  //유저네임 입력이벤트
  const handleNicknameChange = (event) => {
    if (event.target.value.length > 20) {
      return;
    }
    setNickname(event.target.value);
  };

  //비밀번호 입력이벤트
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  //비밀번호 확인 입력이벤트
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  // 비밀번호와 비밀번호 확인이 일치하는지 확인
  useEffect(() => {
    setIsPasswordMatching(password === confirmPassword && password !== '');
  }, [password, confirmPassword]);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedFile(file);
  //   console.log(file);
  //   setPreview(URL.createObjectURL(file));
  // };

  // const handleUpload = async () => {
  //   console.log(id);
  //   const formData = new FormData();
  //   formData.append('file', selectedFile);
  //   formData.append('id', id);

  //   const url = 'https://api.mandarin.weniv.co.kr';
  //   const fileNames = [];

  //   try {
  //     const response = await fetch(url + '/image/uploadfiles', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     const data = await response.json();

  //     for (let i of data) {
  //       fileNames.push(i.filename);
  //     }

  //     if (fileNames.length > 1) {
  //       return fileNames.join(',');
  //     } else {
  //       return fileNames[0];
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }

  //   return true;
  // };

  //이미지 전송 API_수정
  const uploadImage = async (imgFile) => {
    //이미지 전송 코드
    const baseUrl = 'https://api.mandarin.weniv.co.kr/';
    const reqUrl = baseUrl + 'image/uploadfile';

    //폼데이터 만들기(.append('키',값))
    const form = new FormData();
    form.append('image', imgFile);

    const res = await fetch(reqUrl, {
      method: 'POST',
      body: form,
    });
    const json = await res.json();
    const imgUrl = baseUrl + json.filename;
    setImgSrc(imgUrl);
    setPreview(imgUrl);
  };
  //이미지 API주소 적용
  const onChangeImg = (e) => {
    console.log(e.target.files[0]);
    const imgFile = e.target.files[0];
    uploadImage(imgFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      // 추가
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    fetch('https://api.mandarin.weniv.co.kr/user', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          accountname: location.state.id,
          username: nickname,
          image: imgSrc,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          alert('프로필이 성공적으로 업데이트 되었습니다');
          window.location.href = '/main'; // 메인 페이지로 이동
        } else {
          alert('이미 사용중인 계정 ID입니다.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('프로필 업데이트에 실패하였습니다. 다시 시도해주세요.');
      });
  };

  return (
    <div className={styles.pageWrap}>
      <div className={styles.contentArea}>
        <h1 className={styles.pageTitle}>프로필 수정</h1>
        {/* 유저 프로필 사진 삽입 + 닉네임 노출 */}
        <div className={styles['imgChange-area']}>
          <div className={styles['img-box']}>
            <img alt="프로필 이미지" src={preview} />
          </div>
          <div className={styles['imgChange-area-input']}>
            <input
              className={styles['imgChange-input']}
              type="file"
              name="image"
              accept="image/*"
              onChange={onChangeImg}
            />
          </div>
        </div>

        {/* 닉네임 입력 필드 */}
        <input
          type="text"
          placeholder="닉네임"
          className="basic gray"
          value={nickname}
          onChange={handleNicknameChange}
          style={{ marginBottom: '10px' }}
        />
        <p> 닉네임은 영문, 숫자만 가능합니다.</p>
        <p> 20자 이내로 입력하세요</p>

        {/* 1차 비밀번호 입력 필드 */}
        <input
          type="password"
          placeholder="비밀번호"
          className="basic gray"
          onChange={handlePasswordChange}
          style={{ marginTop: '30px' }}
        />

        {/* 2차 비밀번호 입력 필드 */}
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="basic gray"
          value={confirmPassword} // 수정
          onChange={handleConfirmPasswordChange}
          style={{ marginTop: '20px' }}
        />

        {isPasswordMatching && <p>비밀번호가 일치합니다.</p>}

        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: '#E87C3E',
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'block',
            fontSize: '16px',
            margin: '50px auto',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          제출
        </button>
      </div>
    </div>
  );
};

export default ProfileEdit;
