import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IconIpt } from '../../components/input/IptStyleEtc';
import { BasicIpt } from '../../components/input/IptStyle';
import { BasicBtn } from '../../components/button/BtnStyle';
import styles from './css/myPage.module.css';

const ProfileEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');
  const baseUrl = 'https://api.mandarin.weniv.co.kr/';

  const [imgSrc, setImgSrc] = useState(location.state.beforeImg);
  const [nickname, setNickname] = useState(location.state.beforeNickname);
  const [userNameAlert, setUserNameAlert] = useState('');

  // const [pw, setPw] = useState('');
  // const [confirmPw, setConfirmPw] = useState('');
  // const [isPwdMatching, setIsPwMatching] = useState(false);
  // const [pwAlert, setpwAlert] = useState('');

  //유저네임 입력이벤트
  const handleNicknameChange = (e) => {
    if (e.target.value.length > 20) {
      setUserNameAlert('⛔️ 닉네임은 20자 미만으로 작성 가능 합니다.');
      return;
    } else {
      setNickname(e.target.value);
      setUserNameAlert('');
    }
  };

  // //비밀번호 입력이벤트
  // const handlePwChange = (e) => {
  //   if (e.target.value !== '' && e.target.value.length < 6) {
  //     setpwAlert('비밀번호는 6자 이상이어야 합니다.');
  //     setPw(e.target.value);
  //   } else {
  //     setPw(e.target.value);
  //     setpwAlert('');
  //   }
  // };
  // //비밀번호 확인 입력이벤트
  // const handleConfirmPwChange = (e) => {
  //   setConfirmPw(e.target.value);
  // };
  // // 비밀번호와 비밀번호 확인이 일치하는지 확인
  // useEffect(() => {
  //   if (pw === confirmPw) {
  //     setIsPwMatching(true);
  //   } else {
  //     setIsPwMatching(false);
  //   }
  // }, [pw, confirmPw]);

  //회원정보 수정 버튼 활성화
  const editOkFn = () => {
    if (userNameAlert === '') {
      return false;
    } else {
      return true;
    }
  };
  // 서버에 이미지 전송 API(form 형태로 전송 필요)
  const uploadImageFn = (imageFile) => {
    //form 형태로 변환
    const form = new FormData();
    form.append('image', imageFile);
    const reqUrl = baseUrl + 'image/uploadfile';
    axios
      .post(reqUrl, form)
      .then(function (res) {
        const imageUrl =
          'https://api.mandarin.weniv.co.kr/' + res.data.filename;
        setImgSrc(imageUrl);
      })
      .catch(function (error) {
        alert(
          '이미지 파일(.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic)만 업로드가 가능합니다.',
        );
      });
  };
  // 서버에 있는 이미지 불러오는 API
  const onChangeImage = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile !== undefined) {
      uploadImageFn(imageFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqUrl = baseUrl + 'user';
    axios
      .put(
        reqUrl,
        {
          user: {
            accountname: location.state.id,
            username: nickname,
            image: imgSrc,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then(function (res) {
        console.log(res);
        alert('프로필이 성공적으로 업데이트 되었습니다');
        navigate('/mypage');
      })
      .catch(function (error) {
        console.error('Error:', error);
        alert('프로필 업데이트에 실패하였습니다. 다시 시도해주세요.');
      });
  };

  return (
    <div className={styles.pageWrap}>
      <div className={styles.contentArea}>
        <h1 className={styles.pageTitle}>프로필 수정</h1>
        <form onSubmit={handleSubmit} className={styles['edit-area']}>
          <div className={styles['imgChange-area']}>
            <div className={styles['img-box']}>
              <img alt="프로필 이미지" src={imgSrc} />
            </div>
            <div className={styles['imgChange-area-input']}>
              <input
                className={styles['imgChange-input']}
                type="file"
                name="image"
                accept="image/*"
                onChange={onChangeImage}
              />
            </div>
          </div>
          {/* 닉네임 입력 필드 */}
          <div>
            <span className={styles['input-label']}>닉네임</span>
            <IconIpt>
              <BasicIpt
                gray="true"
                placeholder="닉네임"
                value={nickname}
                onChange={handleNicknameChange}
              />
              <i className="icon icon icon-user-w" />
            </IconIpt>
            <p className={styles['input-alert']}>{userNameAlert}</p>
          </div>

          {/* <IconIpt>
            <BasicIpt
              type="password"
              gray="true"
              placeholder="비밀번호"
              value={pw}
              onChange={handlePwChange}
            />
            <i className="icon icon icon-lock-w" />
          </IconIpt>
          <IconIpt>
            <BasicIpt
              //비밀번호가 입력 되면 활성화 되도록
              disabled={pw ? false : true}
              type="password"
              gray="true"
              placeholder="비밀번호"
              value={confirmPw}
              onChange={handleConfirmPwChange}
            />
            <i className="icon icon icon-lock-w" />
          </IconIpt>
          {pwAlert}
          {isPwdMatching ? '' : <p>비밀번호가 일치하지 않습니다</p>} */}

          <BasicBtn wid="100%" disabled={editOkFn()}>
            제출
          </BasicBtn>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
