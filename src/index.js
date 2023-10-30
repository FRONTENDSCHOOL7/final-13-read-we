import React from 'react';
import ReactDOM from 'react-dom/client';
import './common.css';
import LoginPage from './login-Page/LoginPage';
import Header from '../src/Header.js';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginPage></LoginPage>
  </React.StrictMode>,
);
