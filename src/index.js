import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ComponentEx from './ComponentEx';
import './common.css';
import Header from './Header';
import './App.css';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ComponentEx />
    <Header></Header>
    <Footer></Footer>
  </React.StrictMode>,
);
