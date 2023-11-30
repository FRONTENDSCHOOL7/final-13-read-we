import React, { useEffect, useState } from 'react';
import styles from './css/myPage.module.css';
import { BasicBtn } from '../../components/button/BtnStyle';
import FollowerList from './FollowerList';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const YourPageAccList = () => {
  //팔로워,팔로잉 tab전환(초기값: 마이페이지에서 클릭한 값(팔로워 or 팔로잉)
  const state = useLocation();
  const [tab, setTab] = useState(state.state.activeTab);

  const [otherInfo, setOtherInfo] = useState();
  const [isProfileLoading, setIsProfileLoading] = useState(true);

  const token = localStorage.getItem('token');
  const accName = localStorage.getItem('otherName');
  const baseUrl = 'https://api.mandarin.weniv.co.kr';
  const getOtherInfoFn = () => {
    const reqUrl = baseUrl + `/profile/${accName}`;
    axios
      .get(reqUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (res) {
        setOtherInfo(res.data.profile);
        setIsProfileLoading(false);
      });
  };
  useEffect(() => {
    getOtherInfoFn();
  }, []);

  return (
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
        {isProfileLoading === false ? (
          <>
            <div className={styles.accSum}>
              <p>
                <i className="icon icon-like" />
                {tab === 0 ? otherInfo.followerCount : otherInfo.followingCount}
                <span>명</span>
              </p>
            </div>
            <div>
              <ul className={`scrollArea ${styles.userList}`}>
                <FollowerList myInfo={accName} activeTab={tab} />
              </ul>
            </div>
          </>
        ) : (
          <p>now loading</p>
        )}
      </section>
    </div>
  );
};

export default YourPageAccList;
