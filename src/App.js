import { useState } from 'react';
import LoginPage from './login-Page/LoginPage';
import MainPage from './components/main/MainPage';
import { Routes, Route, Link } from 'react-router-dom';
import CmtList from './main-page/CmtList';
import MyPage from './myPage/MyPage';
import YourPage from './myPage/YourPage';
import MyPageAccList from './myPage/MyPageAccList';
import MyLibrary from './myPage/MyLibrary';
import ProfileEdit from './마이페이지 작업공간/ProfileEdit';

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
      <Route path="/profile-edit" element={<ProfileEdit />} />
    </Routes>
    // <MainPage />
  );
}

export default App;
