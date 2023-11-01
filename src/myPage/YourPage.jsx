import React, { useEffect, useState } from 'react';
import ProfileCardOther from '../components/mypage/ProfileCardOther';
import PostSection from '../components/main/PostSection';
import styles from './css/myPage.module.css';
import EmptyList from '../components/mypage/EmptyList';
import Header from '../Header';
import { useLocation } from 'react-router-dom';

const YourPage = () => {
  const loaction = useLocation();

  const token = localStorage.getItem('token');
  const baseUrl = 'https://api.mandarin.weniv.co.kr';

  const [myInfo, setMyInfo] = useState();
  const [postList, setPostList] = useState();
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const [isPostLoading, setIsPostLoading] = useState(true);

  useEffect(() => {
    const accName = loaction.state.id;
    const getMyInfo = async () => {
      const reqUrl = baseUrl + `/profile/${accName}`;
      const res = await fetch(reqUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      const json = await res.json();
      setMyInfo(json);
      setIsProfileLoading(false);
    };
    const getPost = async () => {
      const reqUrl = baseUrl + `/post/${accName}/userpost`;
      const res = await fetch(reqUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      const json = await res.json();
      setPostList(json);
      setIsPostLoading(false);
    };
    getMyInfo();
    getPost();
  }, []);

  return (
    <>
      {isProfileLoading == false && isPostLoading == false ? (
        <>
          <Header />
          <div className={styles.pageWrap}>
            <section className={styles.contentArea}>
              <h2 className={styles.pageTitle}>
                {myInfo.profile.username}'s Page
              </h2>
              <h3 className={styles.myPageTopBanner}>
                <strong>{myInfo.profile.username}님 안녕하세요🖐</strong>
                <p>오늘도 책 읽기 좋은 날씨네요!</p>
                <img src={process.env.PUBLIC_URL + '/images/books.png'} />
              </h3>
              <div className={styles['big-container']}>
                {/* 프로필 정보 */}
                <div className={styles['profile-parent']}>
                  <ProfileCardOther
                    imgSrc={
                      baseUrl + '/' + myInfo.profile.image.replace(/^.*\//, '')
                    }
                    userName={myInfo.profile.username}
                    userEmail="YourEmail"
                    follower={myInfo.profile.followerCount}
                    following={myInfo.profile.followingCount}
                  />
                </div>
                <div className={styles['list-parent']}>
                  {/* 우측 게시물리스트 */}
                  <div className={styles['right-list']}>
                    <div className={styles['my-note']}>
                      <div className={styles['left-center']}>
                        <p className={styles['left']}>지금까지 작성한 기록들</p>
                        <p className={styles.center}>
                          {myInfo.profile.username}님의 독서 노트
                        </p>
                      </div>
                      <p className={styles.right}>
                        총 {postList.post.length}건
                      </p>
                    </div>

                    {/* 마이페이지 > 메인 게시물 리스트 */}
                    {postList.post.length == 0 ? (
                      <EmptyList text1="아직 기록된 독서노트가 없어요" />
                    ) : (
                      postList.post.map((e, index) => {
                        return (
                          <PostSection
                            key={index}
                            date={e.createdAt}
                            imgSrc={
                              baseUrl +
                              '/' +
                              e.author.image.replace(/^.*\//, '')
                            }
                            userName={e.author.username}
                            userEmail="testID.test.com"
                            public="출판사 명"
                            title="책 제목"
                            hit="true"
                            author="작가"
                            content={e.content}
                            like={e.heartCount}
                            cmt={e.commentCount}
                          />
                        );
                      })
                    )}
                  </div>
                </div>
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

export default YourPage;
