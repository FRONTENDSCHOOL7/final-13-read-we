import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ComponentEx from './ComponentEx';
import './common.css';
import Header from './Header';
import './App.css';
import Footer from './Footer';
import Join from './Join';
import Login from './Login';
import MyPageNote from './마이페이지 작업공간/MyPageNote';
import YourPageNote from './마이페이지 작업공간/YourPageNote';
import ProfileEdit from './마이페이지 작업공간/ProfileEdit';
import ProfileInfo from './components/mypage/ProfileInfo';
import ProfileInfoSetting from './components/mypage/ProfileInfoSetting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login></Login>
    <Join></Join>
    <br></br>
    <br></br>
    <br></br>
    <br></br> 
    <ComponentEx />
    <Header></Header>
    <Footer></Footer> */}
    {/* <MyPageNote></MyPageNote> */}
    <ProfileEdit></ProfileEdit>
    {/* <ProfileInfo></ProfileInfo> */}
    {/* <YourPageNote></YourPageNote> */}
    {/* <ProfileInfoSetting></ProfileInfoSetting> */}
  </React.StrictMode>,
);
