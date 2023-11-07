import React from 'react';
import { Link } from 'react-router-dom';
import './LoginJoinSelect.css'; // CSS 파일 import

const LoginJoinSelect = () => {
  return (
    <div className="LoginJoinSelect-container">
      <video
        className="video"
        src={process.env.PUBLIC_URL + '/images/readwe.mp4'}
        autoPlay
        loop
        muted
      />
      <div className="content">
        <div className="buttons">
          <Link to="/login">
            <button className="button">Login</button>
          </Link>

          <Link to="/join">
            <button className="button">Join</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginJoinSelect;
