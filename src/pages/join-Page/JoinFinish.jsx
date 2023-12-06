import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './css/JoinPage.module.css';

export default function JoinFinish() {
  const location = useLocation();

  if (!location.state || !location.state.username) {
    // 오류 처리 - location.state가 없거나 email이 없는 경우
    return (
      <div className="jf-container">
        <div className="lgn-img1" />
        <div className="lgn-img2" />
        <div className="lgn-img3" />
        <div className="lgn-img4" />
        <div className="loginfinish-container">
          <h1>회원가입이 완료되었습니다.</h1>
          <p className="lgn-p">알 수 없는 오류가 발생했습니다</p>
          <Link to="/login" className="lgn-link">
            <div className="lgn-icon" />
            <div className="lgn-ment">
              <p>READWE 즐기러 가기</p>
              <p>책 후기는 물론 서재기능까지 제공해드려요!</p>
            </div>
          </Link>
          {/* 기능 미제공 항목으로 주석 처리 */}
          {/* <div className="lgn-link">
            <div className="lgn-icon-1" />
            <div className="lgn-ment">
              <p>READWE 작가 신청하기</p>
              <p>지식을 공유하면 expert 뱃지를 드려요!!</p>
            </div>
          </div> */}
        </div>
      </div>
    );
  }

  const username = location.state.username;

  return (
    <div className={styles['page-wrap']}>
      <div className={styles['lgn-img1']} />
      <div className={styles['lgn-img2']} />
      <div className={styles['lgn-img3']} />
      <div className={styles['lgn-img4']} />
      <div className={styles['loginfinish-container']}>
        <h1>회원가입이 완료되었습니다.</h1>
        <p className={styles['lgn-p']}>{username}님 반가워요.</p>
        <Link to="/login" className={styles['lgn-link']}>
          <div className={styles['lgn-icon']} />
          <div className={styles['lgn-ment']}>
            <p>READWE 즐기러 가기</p>
            <p>책 후기는 물론 서재기능까지 제공해드려요!</p>
          </div>
        </Link>
        {/* 기능 미제공 항목으로 주석 처리 */}
        {/* <div className="lgn-link">
          <Link to="/login" className="lgn-link">
            <div className="lgn-icon-1" />
            <div className="lgn-ment">
              <p>READWE 작가 신청하기</p>
              <p>지식을 공유하면 expert 뱃지를 드려요!</p>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
