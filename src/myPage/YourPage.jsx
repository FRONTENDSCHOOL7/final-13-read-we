import React, { useEffect, useState } from 'react';
import ProfileCardOther from '../components/mypage/ProfileCardOther';
import PostSection from '../components/main/PostSection';
import styles from './css/myPage.module.css';
import EmptyList from '../components/mypage/EmptyList';

const YourPage = () => {
  const token = localStorage.getItem('token');
  const baseUrl = 'https://api.mandarin.weniv.co.kr';

  const [myInfo, setMyInfo] = useState();
  const [postList, setPostList] = useState();
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const [isPostLoading, setIsPostLoading] = useState(true);

  useEffect(() => {
    const getMyInfo = async () => {
      const reqUrl = baseUrl + `/profile/${localStorage.getItem('otherName')}`;
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
      const reqUrl =
        baseUrl + `/post/${localStorage.getItem('otherName')}/userpost`;
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
                  userAccName={myInfo.profile.accountname}
                  userEmail={myInfo.profile.accountname}
                  follower={myInfo.profile.followerCount}
                  following={myInfo.profile.followingCount}
                  isfollowing={myInfo.profile.isfollow}
                />
              </div>
              <div className={styles['list-parent']}>
                {/* 우측 게시물리스트 */}
                <div className={styles['right-list']}>
                  <div className={styles['my-note']}>
                    <div className={styles['left-center']}>
                      <p className={styles.left}>지금까지 작성한 기록들</p>
                      <p className={styles.center}>
                        {myInfo.profile.username}님의 독서 노트
                      </p>
                    </div>
                    <p className={styles.right}>총 {postList.post.length}건</p>
                  </div>

                  {/* 마이페이지 > 메인 게시물 리스트 */}
                  {postList.post.length == 0 ? (
                    <EmptyList text1="아직 기록된 독서노트가 없어요" />
                  ) : (
                    postList.post.map((e) => {
                      const bookInfo = JSON.parse(e.content);
                      return (
                        <PostSection
                          key={e.id}
                          date={e.createdAt.replace(/T.*/, '')}
                          imgSrc={
                            baseUrl + '/' + e.author.image.replace(/^.*\//, '')
                          }
                          bookImgSrc={e.image}
                          //게시물 id
                          postId={e.id}
                          //게시물 클릭 시 해당 유저 프로필 페이지 이동용
                          accName={e.author.accountname}
                          userName={e.author.username}
                          userEmail="testID.test.com"
                          public={bookInfo.publisher}
                          title={bookInfo.title}
                          hit="true"
                          author={bookInfo.author}
                          content={bookInfo.contentText}
                          description={bookInfo.description}
                          like={e.heartCount}
                          //좋아요 여부 체크용
                          isLike={e.hearted}
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
      ) : (
        <p>now loading</p>
      )}
    </>
  );
};

export default YourPage;
