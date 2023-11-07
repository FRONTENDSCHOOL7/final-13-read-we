import { useState } from 'react';
import LoginPage from './login-Page/LoginPage';
import MainPage from './components/main/MainPage';
import { Routes, Route, Link } from 'react-router-dom';
import MyPage from './myPage/MyPage';
import YourPage from './myPage/YourPage';
import MyPageAccList from './myPage/MyPageAccList';
import YourPageAccList from './myPage/YourPageAccList';
import MyLibrary from './myPage/MyLibrary';
import JoinPage from './join-Page/JoinPage';
import ProfileEdit from './myPage/ProfileEdit';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Chatting from './chat/Chatting';
import LoginJoinSelect from './login-join-select/LoginJoinSelect';
import LoginFinish from './login-Page/JoinFinish';
import PostUpload from './main-page/PostUpload';
import SearchModal from './main-page/SearchModal';
import PostDetails from './main-page/PostDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LoginJoinSelect />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/join-success" element={<LoginFinish />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/postupload" element={<PostUpload />} />
        <Route path="/chat" element={<Chatting />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit" element={<ProfileEdit />} />
        <Route path="/mypage/acclist" element={<MyPageAccList />} />
        <Route path="/mypage/library" element={<MyLibrary />} />
        <Route path="/yourpage" element={<YourPage />} />
        <Route path="/yourpage/youracclist" element={<YourPageAccList />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="*" element={<div>404 Page</div>} /> {/*  404page */}
        <Route path="/search" element={<SearchModal />} />
        <Route path="/postdetails/:postId" element={<PostDetails />} />
      </Routes>
      <Footer />
      {/* <MainPage /> */}
    </>
  );
}

export default App;
