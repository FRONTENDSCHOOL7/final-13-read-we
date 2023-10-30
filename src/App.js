import { useState } from 'react';
import LoginPage from './login-Page/LoginPage';

function App() {
  //myInfo - 로그인한 유저의 정보(토큰)값 저장
  const [myInfo, setMyInfo] = useState('');
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
    <div>
      <h1>App Initialization</h1>
      <LoginPage />
      <button onClick={getMyInfo}>내정보 확인</button>
    </div>
  );
}

export default App;
