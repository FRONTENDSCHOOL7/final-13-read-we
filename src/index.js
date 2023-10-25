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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Login></Login>
    <Join></Join>
    <ComponentEx />
    <Header></Header>
    <Footer></Footer>
  </React.StrictMode>,
);
