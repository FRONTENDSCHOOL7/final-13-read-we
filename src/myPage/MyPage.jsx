import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/mypage/ProfileCard';
import PostSection from '../components/main/PostSection';
import styles from './css/myPage.module.css';
import EmptyList from '../components/mypage/EmptyList';

const MyPage = () => {
  const token = localStorage.getItem('token');
  const baseUrl = 'https://api.mandarin.weniv.co.kr';

  const [myInfo, setMyInfo] = useState(null);
  const [postList, setPostList] = useState();
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const [isPostLoading, setIsPostLoading] = useState(true);

  const accName = myInfo?.user?.accountname;
  //게시글 API
  useEffect(() => {
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
    getPost();
  }, [myInfo]);

  //유저정보 API
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
      //accountname 임시로 로컬에 저장(프로필 이동 시 본인 계정 체크용)
      localStorage.setItem('accname', json.user.accountname);
      setMyInfo(json);
      setIsProfileLoading(false);
    };
    getMyInfo();
  }, []);
  return (
    <div className={styles.pageWrap}>
      <section className={styles.contentArea}>
        <h2 className={styles.pageTitle}>My Page</h2>
        <h3 className={styles.myPageTopBanner}>
          <strong>{myInfo?.user?.username}님 안녕하세요🖐</strong>
          <p>오늘도 책 읽기 좋은 날씨네요!</p>
          <img src={process.env.PUBLIC_URL + '/images/books.png'} />
        </h3>
        <div className={styles['big-container']}>
          {/* 프로필 정보 */}
          {isProfileLoading == false ? (
            <div className={styles['profile-parent']}>
              <ProfileCard
                imgSrc={baseUrl + '/' + myInfo.user.image.replace(/^.*\//, '')}
                accName={myInfo.user.accountname}
                userName={myInfo.user.username}
                userEmail="myEmail"
                follower={myInfo.user.followerCount}
                following={myInfo.user.followingCount}
              />
            </div>
          ) : (
            <p>now loading</p>
          )}

          {isPostLoading == false ? (
            <div className={styles['list-parent']}>
              {/* 우측 게시물리스트 */}
              <div className={styles['right-list']}>
                <div className={styles['my-note']}>
                  <div className={styles['left-center']}>
                    <p className={styles.left}>지금까지 작성한 기록들</p>
                    <p className={styles.center}>나의 독서 노트</p>
                  </div>
                  <p className={styles.right}>총 {postList?.post?.length}건</p>
                </div>

                {/* 마이페이지 > 메인 게시물 리스트 */}
                {postList?.post?.length == 0 ? (
                  <EmptyList
                    text1="아직 독서노트가 기록되지 않았어요"
                    text2="책을 읽고 기록을 남겨보세요!"
                  />
                ) : (
                  postList?.post?.map((e) => {
                    return (
                      <PostSection
                        key={e.id}
                        date={e.createdAt.replace(/T.*/, '')}
                        imgSrc={
                          baseUrl + '/' + e.author.image.replace(/^.*\//, '')
                        }
                        postId={e.id}
                        accName={e.author.accountname}
                        userName={e.author.username}
                        userEmail="testID.test.com"
                        public="출판사 명"
                        title="책 제목"
                        hit="true"
                        author="작가"
                        content={e.content}
                        like={e.heartCount}
                        isLike={e.hearted}
                        cmt={e.commentCount}
                      />
                    );
                  })
                )}
              </div>
            </div>
          ) : (
            <p>now loading</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyPage;
