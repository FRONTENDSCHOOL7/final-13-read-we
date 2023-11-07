import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/mypage/ProfileCard';
import PostSection from '../components/main/PostSection';
import styles from './css/myPage.module.css';
import EmptyList from '../components/mypage/EmptyList';
import { Link } from 'react-router-dom';

const MyPage = () => {
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');
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
          {isProfileLoading === false ? (
            <div className={styles['profile-parent']}>
              <ProfileCard
                imgSrc={baseUrl + '/' + myInfo.user.image.replace(/^.*\//, '')}
                accName={myInfo.user.accountname}
                userName={myInfo.user.username}
                userEmail={email}
                follower={myInfo.user.followerCount}
                following={myInfo.user.followingCount}
              />
            </div>
          ) : (
            <p>now loading</p>
          )}

          {isPostLoading === false ? (
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
                {postList?.post?.length === 0 ? (
                  <EmptyList
                    text1="아직 독서노트가 기록되지 않았어요"
                    text2="책을 읽고 기록을 남겨보세요!"
                  />
                ) : (
                  postList?.post?.map((e) => {
                    const bookInfo = JSON.parse(e.content);
                    return (
                      <Link to={`/postdetails/${e.id}`} key={e.id}>
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
                          // userEmail="testID.test.com"
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
                      </Link>
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
