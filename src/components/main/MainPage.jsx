import React from 'react';
import Header from '../../Header';
import styles from './css/Main.module.css';
import PostSection from './PostSection';
import MainNavBtn from '../button/MainNavBtn';
import { BasicBtn } from '../button/BtnStyle';
import MainProfileCard from './MainProfileCard';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.MainContainer}>
        <div className={styles.outerContainer}>
          <div className={styles.MProFloat}>
            <MainProfileCard
              imgSrc="icon/testProfile.png"
              userName="mewmew"
              userEmail="testID.test.com"
            />
          </div>
          <div className={styles.MainLeftContainer}>
            <MainNavBtn></MainNavBtn>
            <BasicBtn md="true" bgcolor="#E87C3E" round="100px" wid="100%">
              POST
            </BasicBtn>
          </div>
          <div className={styles.MainPostContainer}>
            <div className={styles.HomeButton}>
              <button>Home</button>
            </div>
            <PostSection
              date="2023.10.26"
              imgSrc="icon/testProfile.png"
              userName="mewmew"
              userEmail="testID.test.com"
              public="출판사 명"
              title="책 제목"
              hit="true"
              author="작가"
              content="내요요요요용"
              like="11"
              cmt=""
            ></PostSection>
            <PostSection className={styles.PostSection}></PostSection>
            <PostSection className={styles.PostSection}></PostSection>
            <PostSection className={styles.PostSection}></PostSection>
            <div className={styles.MainRightContainer}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
