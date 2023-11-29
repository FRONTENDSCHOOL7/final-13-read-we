import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  // 회원가입 API
  const join = async (joinData) => {
    const reqUrl = 'https://api.mandarin.weniv.co.kr/user';
    const res = await fetch(reqUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(joinData),
    });
    const json = await res.json();
    console.log(json);

    // const token = json.user.token;
    // console.log(token);

    // localStorage.setItem('token', token);

    if (res.status === 200) {
      // 회원가입 성공 시 알림 메시지 표시
      alert('회원가입이 성공했습니다.');

      // 회원가입 성공 시 /join-success로 이동
      navigate('/join-success', { state: { username } }); // username을 state로 전달
    } else {
      // 회원가입 실패 시 알림 메시지 표시
      alert('회원가입에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  const inputUsername = (e) => {
    setUsername(e.target.value);
  };
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const inputAccountname = (e) => {
    setAccountname(e.target.value);
  };

  const uploadImage = async (imageFile) => {
    const baseUrl = 'https://api.mandarin.weniv.co.kr/';
    const reqUrl = baseUrl + 'image/uploadfile';
    //폼데이터 만들기
    const form = new FormData();
    // 폼 데이터("키","값")
    //폼 데이터 값추가
    form.append('image', imageFile);
    //폼바디에 넣어 요청
    const res = await fetch(reqUrl, {
      method: 'POST',
      body: form,
    });
    const json = await res.json();
    console.log(baseUrl + json.filename);
    const imageUrl = baseUrl + json.filename;
    serImgsrc(imageUrl);
  };

  const onChangeImage = (e) => {
    //파일 가져오기
    const imageFile = e.target.files[0];
    //폼 데이터 만들기
    // const form = new FormData();
    // 폼 데이터("키","값")
    //폼 데이터 값추가
    // form.append('image', file);
    uploadImage(imageFile);
  };
  const submitJoin = (e) => {
    const joinData = {
      user: {
        username: username,
        email: email,
        password: password,
        accountname: accountname,
      },
    };
    join(joinData);
  };

  const isCompleted = (field) => {
    switch (field) {
      case 'accountname':
        return !!accountname;
      case 'email':
        return !!email;
      case 'username':
        return !!username;
      case 'password':
        return !!password;
      default:
        return false;
    }
  };

  return (
    <section>
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
              onChange={inputEmail}
            />
            <i className="icon icon-email-w" />
          </IconIpt>
          <IconIpt>
            <BasicIpt
              type="password"
              gray="true"
              placeholder="비밀번호"
              value={password}
              onChange={inputPassword}
            />
            <i className="icon icon icon-lock-w" />
          </IconIpt>
          <IconIpt>
            <BasicIpt
              gray="true"
              placeholder="아이디"
              value={accountname}
              onChange={inputAccountname}
            />
            <i className="icon icon-user-w" />
          </IconIpt>
          <IconIpt>
            <BasicIpt
              gray="true"
              placeholder="사용자 이름"
              value={username}
              onChange={inputUsername}
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
