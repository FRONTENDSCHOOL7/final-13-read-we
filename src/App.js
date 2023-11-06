import { useState } from 'react';
import LoginPage from './login-Page/LoginPage';
import MainPage from './components/main/MainPage';
import { Routes, Route, Link } from 'react-router-dom';
import CmtList from './main-page/CmtList';
import MyPage from './myPage/MyPage';
import YourPage from './myPage/YourPage';
import MyPageAccList from './myPage/MyPageAccList';
import YourPageAccList from './myPage/YourPageAccList';
import MyLibrary from './myPage/MyLibrary';
import JoinPage from './join-Page/JoinPage';
import Emailsignup from './login-Page/Emailsignup';
import ProfileEdit from './myPage/ProfileEdit';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Chatting from './chat/Chatting';
import LoginJoinSelect from './login-join-select/LoginJoinSelect';
import LoginFinish from './login-Page/JoinFinish';
import PostUpload from './main-page/PostUpload';
import SearchModal from './main-page/SearchModal';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/join-success" element={<LoginFinish />} />
        <Route path="/email-signup" element={<Emailsignup />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/postupload" element={<PostUpload />} />
        {/* <Route path="/comment" element={<CmtList />} /> */}
        <Route path="/chat" element={<Chatting />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit" element={<ProfileEdit />} />
        <Route path="/mypage/acclist" element={<MyPageAccList />} />
        <Route path="/mypage/library" element={<MyLibrary />} />
        <Route path="/yourpage" element={<YourPage />} />
        <Route path="/yourpage/youracclist" element={<YourPageAccList />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="/select" element={<LoginJoinSelect />} />
        <Route path="*" element={<div>404 Page</div>} /> {/*  404page */}
        <Route path="/search" element={<SearchModal />} />
      </Routes>
      <Footer />
      {/* <MainPage /> */}
    </>
  );
}

export default App;
