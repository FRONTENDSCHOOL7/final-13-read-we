import React, { useEffect, useState } from 'react';
import styles from './css/myPage.module.css';
import { BasicBtn } from '../components/button/BtnStyle';
import FollowerList from './FollowerList';
import FollowingList from './FollowingList';
import Header from '../components/header/Header';

const MyPageAccList = () => {
  const token = localStorage.getItem('token');
  const baseUrl = 'https://api.mandarin.weniv.co.kr';

  const [myInfo, setMyInfo] = useState();
  const [isProfileLoading, setIsProfileLoading] = useState(true);

  useEffect(() => {
    const getMyInfo = async () => {
      const reqUrl = baseUrl + '/user/myinfo';
      const res = await fetch(reqUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await res.json();
      setMyInfo(json);
      setIsProfileLoading(false);
    };
    getMyInfo();
  }, []);

  const [tab, setTab] = useState(0);
  return (
    <>
      {isProfileLoading === false ? (
        <>
          <Header />
          <div className={styles.pageWrap}>
            <section className={styles.contentArea}>
              <h2 className="a11y-hidden">팔로워/팔로잉 리스트</h2>
              <div className={styles.tabBtn}>
                <BasicBtn
                  md="true"
                  bgcolor={tab === 0 ? '#000000' : '#a7a7a7'}
                  wid="120px"
                  onClick={() => {
                    setTab(0);
                  }}
                >
                  팔로워
                </BasicBtn>
                <BasicBtn
                  md="true"
                  bgcolor={tab === 0 ? '#a7a7a7' : '#000000'}
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
                  {tab === 0
                    ? myInfo.user.followerCount
                    : myInfo.user.followingCount}
                  <span>명</span>
                </p>
              </div>
              <div>
                <ul className={`scrollArea ${styles.userList}`}>
                  {tab === 0 ? (
                    <FollowerList myInfo={myInfo.user.accountname} />
                  ) : (
                    <FollowingList myInfo={myInfo.user.accountname} />
                  )}
                </ul>
              </div>
            </section>
          </div>
        </>
      ) : (
        <p>now loading</p>
      )}
    </>
  );
};

export default MyPageAccList;