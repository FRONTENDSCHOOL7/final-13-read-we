import React, { useState } from 'react';
import styles from './css/myPage.module.css';
import Header from '../Header';
import Footer from '../Footer';
import { BasicBtn } from '../components/button/BtnStyle';
import ProfileList from '../components/mypage/ProfileList';

const MyPage = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className={styles.pageWrap}>
      <section className={styles.contentArea}>
        <h2 className="a11y-hidden">팔로워/팔로잉 리스트</h2>
        <div className={styles.tabBtn}>
          <BasicBtn
            md="true"
            bgcolor={tab == 0 ? '#000000' : '#a7a7a7'}
            wid="120px"
            onClick={() => {
              setTab(0);
            }}
          >
            팔로워
          </BasicBtn>
          <BasicBtn
            md="true"
            bgcolor={tab == 0 ? '#a7a7a7' : '#000000'}
            wid="120px"
            onClick={() => {
              setTab(1);
            }}
          >
            팔로잉
          </BasicBtn>
        </div>
        <div className={styles.accSum}>
          <p>
            <i className="icon icon-like" />
            {tab == 0 ? 345 : 12}
            <span>명</span>
          </p>
        </div>
        <div>
          <ul className={`scrollArea ${styles.userList}`}>
            {tab == 0 ? (
              <>
                <ProfileList
                  imgSrc="icon/testProfile.png"
                  userName="팔로워 리스트 입니다용"
                  userEmail="test@test.com"
                  type="dot"
                />
                <ProfileList
                  imgSrc="StackUpBooks.png"
                  userName="집에 있지만 집에 가고 싶습니다"
                  userEmail="iwantgohome@test.com"
                  type="dot"
                />
                <ProfileList
                  imgSrc="testBook.png"
                  userName="저도요"
                  userEmail="yanadoo...@test.com"
                  type="dot"
                />
              </>
            ) : (
              <>
                <ProfileList
                  imgSrc="StackUpBooks.png"
                  userName="팔로잉 리스트 입니다용"
                  userEmail="test@test.com"
                  type="remove"
                />
                <ProfileList
                  imgSrc="testBook.png"
                  userName="집에 있지만 집에 가고 싶습니다"
                  userEmail="iwantgohome@test.com"
                  type="remove"
                />
                <ProfileList
                  imgSrc="icon/testProfile.png"
                  userName="저도요"
                  userEmail="yanadoo...@test.com"
                  type="remove"
                />
              </>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MyPage;
