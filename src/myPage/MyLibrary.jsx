import React, { useEffect, useState } from 'react';
import styles from './css/myPage.module.css';
import { BasicBtn } from '../components/button/BtnStyle';
import MyLibraryChart from './MyLibraryChart';
import MyLibraryRead from './MyLibraryRead';
import EmptyList from '../components/mypage/EmptyList';

const MyLibrary = () => {
  const token = localStorage.getItem('token');
  const baseUrl = 'https://api.mandarin.weniv.co.kr';

  const [tab, setTab] = useState(0);
  const [myInfo, setMyInfo] = useState();
  const [postInfo, setPostInfo] = useState();
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const accName = myInfo?.user?.accountname;
  const postAllInfo = postInfo?.post;

  //월별 읽은 책 count
  const nowMonth = new Date().getMonth() + 1;
  const postCounter = (m) => {
    const monthPost = postInfo?.post?.filter(
      (e) => e.createdAt.replace(/T.*/, '').substr(5, 2) == nowMonth - m,
    );
    return monthPost?.length;
  };

  //사용자 정보 API
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

  //사용자 게시글 API
  useEffect(() => {
    const getPost = async () => {
      const reqUrl = baseUrl + `/post/${accName}/userpost`;
      const res = await fetch(reqUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await res.json();
      setPostInfo(json);
    };
    getPost();
  }, [myInfo]);

  //독서잔디 데이터 생성(나중에 깔끔하게 정리할 필요있음...)
  //1. 날짜 같은것 끼리 카운트
  const [countResult, setCountResult] = useState(null);
  useEffect(() => {
    const countPostByDate = (posts) => {
      let postCount = {};
      if (Array.isArray(posts)) {
        for (let post of posts) {
          let date = post.createdAt.replace(/T.*/, '');
          if (!postCount[date]) {
            postCount[date] = 1;
          } else {
            postCount[date]++;
          }
        }
      }
      return postCount;
    };
    setCountResult(countPostByDate(postAllInfo));
  }, [postInfo]);

  // 2. 날짜/개수 chart data양식에 맞게 변환
  const [chartData, setDhartData] = useState(null);
  useEffect(() => {
    function transformCountToArr(countResult) {
      let result = [];
      for (let date in countResult) {
        result.push({
          value: countResult[date],
          day: date,
        });
      }
      return result;
    }
    setDhartData(transformCountToArr(countResult));
  }, [countResult]);

  return (
    <div className={styles.pageWrap}>
      <section className={styles.contentArea}>
        <h2 className={styles.pageTitle}>내 서재</h2>
        <h3 className={styles.myLibraryTopBanner}>
          <strong>{myInfo?.user?.username}님의 서재에요</strong>
          <p>지금까지 읽은 책과 내 독서 현황을 알수 있는 공간입니다!</p>
          <img src={process.env.PUBLIC_URL + '/images/StackUpBooks_2.png'} />
        </h3>
        {isProfileLoading === false ? (
          <>
            <div className={styles.topArea}>
              <article className={styles.myLibraryBoxBlack}>
                <h4>월 별 독서 기록</h4>
                <ul className={styles.myLibraryMonth}>
                  <li className={styles.nowMonth}>
                    <strong>이번달 읽은 책</strong>
                    <div>
                      <strong className={styles.counter}>
                        {postCounter(0)}
                      </strong>
                      <span>권</span>
                    </div>
                  </li>
                  <li>
                    <strong>{nowMonth - 1}월에 읽은 책</strong>
                    <div>
                      <strong className={styles.counter}>
                        {postCounter(1)}
                      </strong>
                      <span>권</span>
                    </div>
                  </li>
                  <li>
                    <strong>{nowMonth - 2}월에 읽은 책</strong>
                    <div>
                      <strong className={styles.counter}>
                        {postCounter(2)}
                      </strong>
                      <span>권</span>
                    </div>
                  </li>
                </ul>
              </article>
              <article className={styles.myLibraryBox}>
                <h4>나의 독서 잔디 🌱</h4>
                <div
                  style={{ width: 'auto', height: '180px', margin: '0 auto' }}
                >
                  <MyLibraryChart data={chartData} />
                </div>
              </article>
            </div>

            <article className={styles.myLibraryBox}>
              <h4>읽은 책 / 찜한 책</h4>
              <div className={styles.btnWrap}>
                <BasicBtn
                  md="true"
                  bgcolor={tab == 0 ? '#000000' : '#a7a7a7'}
                  wid="120px"
                  onClick={() => {
                    setTab(0);
                  }}
                >
                  읽은 책
                </BasicBtn>
                <BasicBtn
                  md="true"
                  bgcolor={tab == 0 ? '#a7a7a7' : '#000000'}
                  wid="120px"
                  onClick={() => {
                    setTab(1);
                  }}
                >
                  찜한 책
                </BasicBtn>
              </div>
              <ul className={styles.MybookList}>
                {tab === 0 ? (
                  postAllInfo?.length === 0 ? (
                    <EmptyList
                      text1="아직 독서노트가 기록되지 않았어요"
                      text2="책을 읽고 기록을 남겨보세요!"
                    />
                  ) : (
                    postAllInfo?.map((e) => {
                      const bookInfo = JSON.parse(e.content);
                      return (
                        <MyLibraryRead
                          key={e.id}
                          bookImgSrc={e.image}
                          title={bookInfo.title}
                        />
                      );
                    })
                  )
                ) : (
                  <EmptyList
                    text1="찜한 책이 없어요!"
                    text2="책을 찜하고 나만의 서재를 채워보세요!"
                  />
                )}
              </ul>
            </article>
          </>
        ) : (
          <p>now loading</p>
        )}
      </section>
    </div>
  );
};

export default MyLibrary;
