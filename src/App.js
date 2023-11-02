import { useState } from 'react';
import MainPage from './components/main/MainPage';
import { Routes, Route, Link } from 'react-router-dom';
import CmtList from './main-page/CmtList';
import MyPage from './myPage/MyPage';
import YourPage from './myPage/YourPage';
import MyPageAccList from './myPage/MyPageAccList';
import MyLibrary from './myPage/MyLibrary';
import LoginPage from './login-Page/LoginPage';
import JoinPage from './join-Page/JoinPage';
import Emailsignup from './login-Page/Emailsignup';
import LoginFinish from './login-Page/LoginFinish';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/loginfinsh" element={<LoginFinish />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/email-signup" element={<Emailsignup />} />
      {/* <Route path="/comment" element={<CmtList />} /> */}
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/acclist" element={<MyPageAccList />} />
      <Route path="/mypage/library" element={<MyLibrary />} />
      <Route path="/yourpage" element={<YourPage />} />
    </Routes>
  );
}

export default App;
