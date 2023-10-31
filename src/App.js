import { useState } from 'react';
import LoginPage from './login-Page/LoginPage';
import MainPage from './components/main/MainPage';
import { Routes, Route, Link } from 'react-router-dom';
import CmtList from './main-page/CmtList';
import MyPage from './myPage/MyPage';
import YourPage from './myPage/YourPage'
import MyPageAccList from './myPage/MyPageAccList';
import MyLibrary from './myPage/MyLibrary';

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
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/acclist" element={<MyPageAccList />} />
      <Route path="/mypage/library" element={<MyLibrary />} />
      <Route path="/yourpage" element={<YourPage />} />
    </Routes>
    // <MainPage />
  );
}

export default App;
