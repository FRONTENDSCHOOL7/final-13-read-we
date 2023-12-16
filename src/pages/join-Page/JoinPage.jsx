import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IconIpt } from '../../components/input/IptStyleEtc';
import { BasicIpt } from '../../components/input/IptStyle';
import { BasicBtn } from '../../components/button/BtnStyle';
import styles from './css/JoinPage.module.css';

export default function JoinPage() {
  const navigate = useNavigate();
  //입력 정보 useState
  const [imgSrc, serImgsrc] = useState(
    'http://api.mandarin.weniv.co.kr/Ellipse.png',
  );
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [accountname, setAccountname] = useState('');
  const [password, setPassword] = useState('');
  const inputInfo = (e, inputType) => {
    inputType(e.target.value);
  };

  // 회원가입 API
  const joinFn = async () => {
    const reqUrl = 'https://api.mandarin.weniv.co.kr/user';
    axios
      .post(reqUrl, {
        user: {
          username: username,
          email: email,
          password: password,
          accountname: accountname,
          image: imgSrc,
        },
      })
      .then(function (res) {
        alert('회원가입이 성공했습니다.');
        // 회원가입 성공 시/join-success로 이동
        navigate('/join-success', { state: { username } });
      })
      .catch(function (error) {
        alert(error.response.data.message);
      });
  };
  const submitJoin = (e) => {
    e.preventDefault();
    joinFn();
  };

  // 서버에 이미지 전송 API(form 형태로 전송 필요)
  const uploadImageFn = (imageFile) => {
    //form 형태로 변환
    const form = new FormData();
    form.append('image', imageFile);
    axios
      .post('https://api.mandarin.weniv.co.kr/image/uploadfile', form)
      .then(function (res) {
        const imageUrl =
          'https://api.mandarin.weniv.co.kr/' + res.data.filename;
        serImgsrc(imageUrl);
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

  return (
    <section className={styles.pageWrap}>
      <h2 className="a11y-hidden">회원 가입</h2>
      <div className={styles['join-Box']}>
        <div className={styles['title-box']}>
          <h3 className={styles['join-title']}>리드위 회원가입</h3>
          <strong className={styles['join-ment']}>
            아이디와 이메일로 간편하게 리드위를 시작하세요!
          </strong>
        </div>
        <div className={styles['info-box']}>
          <label className={styles['img-upload']}>
            <div className={styles['img-box']}>
              <img src={imgSrc} alt="" id="imagePre" />
            </div>
            <input
              type="file"
              id="profileImg"
              name="image"
              accept="image/*"
              onChange={onChangeImage}
            />
          </label>
          <IconIpt>
            <BasicIpt
              gray="true"
              placeholder="이메일"
              value={email}
              onChange={(e) => {
                inputInfo(e, setEmail);
              }}
            />
            <i className="icon icon-email-w" />
          </IconIpt>
          <IconIpt>
            <BasicIpt
              type="password"
              gray="true"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => {
                inputInfo(e, setPassword);
              }}
            />
            <i className="icon icon icon-lock-w" />
          </IconIpt>
          <IconIpt>
            <BasicIpt
              gray="true"
              placeholder="아이디"
              value={accountname}
              onChange={(e) => {
                inputInfo(e, setAccountname);
              }}
            />
            <i className="icon icon-user-w" />
          </IconIpt>
          <IconIpt>
            <BasicIpt
              gray="true"
              placeholder="사용자 이름"
              value={username}
              onChange={(e) => {
                inputInfo(e, setUsername);
              }}
            />
            <i className="icon icon-user-w" />
          </IconIpt>
          <BasicBtn type="submit" onClick={submitJoin}>
            가입하기
          </BasicBtn>
        </div>
      </div>
    </section>
  );
}
