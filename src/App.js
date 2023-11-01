import { useState } from 'react';
import LoginPage from './login-Page/LoginPage';
import Header from '../src/components/header/Header';
import JoinPage from './join-Page/JoinPage';
function App() {
  //myInfo - 로그인한 유저의 정보(토큰)값 저장
  const [myInfo, setMyInfo] = useState('');
  //내 정보 가져오는 함수
  const getMyInfo = async () => {
    const token = localStorage.getItem('token');
    const reqUrl = 'https://api.mandarin.weniv.co.kr/user/myinfo';
    const res = await fetch(reqUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    });
    const json = await res.json();
    setMyInfo(JSON.stringify(json));
    console.log(myInfo);
  };

  return (
    <>
      {/* <LoginPage /> */}
      <button onClick={getMyInfo}>내정보 확인</button>
      <JoinPage></JoinPage>
    </>
  );
}

export default App;
