import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ComponentEx from './ComponentEx';
import './common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ComponentEx />
  </React.StrictMode>,
);
