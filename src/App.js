import { useState } from 'react';
import LoginPage from './login-Page/LoginPage';
import MainPage from './components/main/MainPage';
import { Routes, Route, Link } from 'react-router-dom';
import CmtList from './main-page/CmtList';
import MyPageNote from './마이페이지 작업공간/MyPageNote';

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
    <Routes>
      <Route path="/main" element={<MainPage />} />
      {/* <Route path="/comment" element={<CmtList />} /> */}
      <Route path="/mypage" element={<MyPageNote />} />
    </Routes>
    // <MainPage />
  );
}

export default App;
