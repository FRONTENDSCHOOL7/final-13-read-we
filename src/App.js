import { useState } from 'react';
import LoginPage from './login-Page/LoginPage';
<<<<<<< HEAD
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
=======
import MainPage from './components/main/MainPage';
import { Routes, Route, Link } from 'react-router-dom';
import CmtList from './main-page/CmtList';
import MyPage from './myPage/MyPage';
import YourPage from './myPage/YourPage';
import MyPageAccList from './myPage/MyPageAccList';
import MyLibrary from './myPage/MyLibrary';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      {/* <Route path="/comment" element={<CmtList />} /> */}
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/acclist" element={<MyPageAccList />} />
      <Route path="/mypage/library" element={<MyLibrary />} />
      <Route path="/yourpage" element={<YourPage />} />
    </Routes>
    // <MainPage />
>>>>>>> 80a1e8d7dad9ff69f820da71e87abff3015ed9b8
  );
}

export default App;
