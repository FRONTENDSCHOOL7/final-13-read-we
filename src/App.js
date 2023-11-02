import { useState } from 'react';
import MainPage from './components/main/MainPage';
import { Routes, Route, Link } from 'react-router-dom';
import CmtList from './main-page/CmtList';
import MyPage from './myPage/MyPage';
import YourPage from './myPage/YourPage';
import MyPageAccList from './myPage/MyPageAccList';
import MyLibrary from './myPage/MyLibrary';
<<<<<<< HEAD
import LoginPage from './login-Page/LoginPage';
import JoinPage from './join-Page/JoinPage';
import Emailsignup from './login-Page/Emailsignup';
import LoginFinish from './login-Page/LoginFinish';
=======
import YourPageAccList from './myPage/YourPageAccList';
>>>>>>> 8311d819dffe06ce4d2618026dfe3e113e14f7b9

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
      <Route path="/yourpage/youracclist" element={<YourPageAccList />} />
    </Routes>
  );
}

export default App;
