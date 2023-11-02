import React, { useState } from 'react';
import Header from '../../Header';
import styles from './css/Main.module.css';
import PostSection from './PostSection';
import MainNavBtn from '../button/MainNavBtn';
import { BasicBtn } from '../button/BtnStyle';
import MainProfileCard from './MainProfileCard';
import MainPostCard from './MainPostCard';
import { IconIpt } from '../input/IptStyleEtc';
import { BasicIpt } from '../input/IptStyle';
import Trend from './Trend';
import Recent from './RecentSection';
import EmptyList from '../mypage/EmptyList';

const MainPage = () => {
  const posts = []; //post 갯수
  return (
    <div className={styles.container}>
      <Header />
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
            <MainNavBtn />
            <BasicBtn
              md="true"
              bgcolor="#E87C3E"
              round="100px"
              wid="100%"
              weight="600"
            >
              POST
            </BasicBtn>
          </div>
          <div className={styles.MainPostContainer}>
            <div className={styles.HomeButton}>
              <button>Home</button>
            </div>
            <MainPostCard imgSrc="icon/testProfile.png" />
            {posts.length === 0 ? (
              <EmptyList />
            ) : (
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
              />
            )}
          </div>
          <div className={styles.MainRightContainer}>
            <IconIpt>
              <BasicIpt sm="true" placeholder="검색" />
              <i class="icon icon-search" />
            </IconIpt>
            {/* <Recent></Recent> */}
            <Trend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
