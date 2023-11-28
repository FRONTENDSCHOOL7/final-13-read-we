import LoginPage from './pages/login-Page/LoginPage';
import MainPage from './pages/main/MainPage';
import { Routes, Route } from 'react-router-dom';
import MyPage from './pages/myPage/MyPage';
import YourPage from './pages/myPage/YourPage';
import MyPageAccList from './pages/myPage/MyPageAccList';
import YourPageAccList from './pages/myPage/YourPageAccList';
import MyLibrary from './pages/myPage/MyLibrary';
import JoinPage from './pages/join-Page/JoinPage';
import ProfileEdit from './pages/myPage/ProfileEdit';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Chatting from './pages/chat/Chatting';
import LoginJoinSelect from './pages/login-join-select/LoginJoinSelect';
import LoginFinish from './pages/login-Page/JoinFinish';
import PostUpload from './pages/main-page/PostUpload';
import SearchModal from './pages/main-page/SearchModal';
import PostDetails from './pages/main-page/PostDetails';

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
