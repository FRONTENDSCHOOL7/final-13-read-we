import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProfileCardOther from '../../components/mypage/ProfileCardOther';
import PostSection from '../main/PostSection';
import EmptyList from '../../components/mypage/EmptyList';
import styles from './css/myPage.module.css';

const YourPage = () => {
  const token = localStorage.getItem('token');
  const baseUrl = 'https://api.mandarin.weniv.co.kr';

  const [otherInfo, setOtherInfo] = useState();
  const [postList, setPostList] = useState();
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const [isPostLoading, setIsPostLoading] = useState(true);

  const getPostFn = () => {
    const reqUrl =
      baseUrl + `/post/${localStorage.getItem('otherName')}/userpost`;
    axios
      .get(reqUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (res) {
        setPostList(res.data.post);
        setIsPostLoading(false);
      })
      .catch(function (error) {
        alert('게시글 리스트를 불러오지 못했습니다');
      });
  };

  const getOtherInfoFn = () => {
    const reqUrl = baseUrl + `/profile/${localStorage.getItem('otherName')}`;
    axios
      .get(reqUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (res) {
        setOtherInfo(res.data.profile);
        setIsProfileLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getPostFn();
    getOtherInfoFn();
  }, []);

  return (
    <div className={styles.pageWrap}>
      <section className={styles.contentArea}>
        <h2 className={styles.pageTitle}>{otherInfo?.username}'s Page</h2>
        <h3 className={styles.myPageTopBanner}>
          <strong>{otherInfo?.username}님 안녕하세요🖐</strong>
          <p>오늘도 책 읽기 좋은 날씨네요!</p>
          <img src={process.env.PUBLIC_URL + '/images/books.png'} alt="" />
        </h3>
        <div className={styles['big-container']}>
          {/* 프로필 정보 */}
          {isProfileLoading === false ? (
            <div className={styles['profile-parent']}>
              <ProfileCardOther
                imgSrc={baseUrl + '/' + otherInfo.image.replace(/^.*\//, '')}
                userName={otherInfo.username}
                userAccName={otherInfo.accountname}
                follower={otherInfo.followerCount}
                following={otherInfo.followingCount}
                isfollowing={otherInfo.isfollow}
              />
            </div>
          ) : (
            <div className={`${styles['profile-parent']} ${styles.loading}`}>
              <p>프로필 정보를 불러오고 있어요</p>
            </div>
          )}
          {/* 우측 게시물리스트 */}
          {isPostLoading === false ? (
            <div className={styles['list-parent']}>
              <div className={styles['right-list']}>
                <div className={styles['my-note']}>
                  <div className={styles['left-center']}>
                    <p className={styles.left}>지금까지 작성한 기록들</p>
                    <p className={styles.center}>
                      {otherInfo.username}님의 독서 노트
                    </p>
                  </div>
                  <p className={styles.right}>총 {postList.length}건</p>
                </div>
                {/* 마이페이지 > 메인 게시물 리스트 */}
                {postList.length === 0 ? (
                  <EmptyList text1="아직 기록된 독서노트가 없어요" />
                ) : (
                  postList.map((e) => {
                    const bookInfo = JSON.parse(e.content);
                    return (
                      <Link to={`/postdetails/${e.id}`} key={e.id}>
                        <PostSection
                          key={e.id}
                          date={e.createdAt.replace(/T.*/, '')}
                          imgSrc={
                            baseUrl + '/' + e.author.image.replace(/^.*\//, '')
                          }
                          bookImgSrc={e.image} //게시물 id
                          postId={e.id}
                          accName={e.author.accountname} //게시물 클릭 시 해당 유저 프로필 페이지 이동용
                          userName={e.author.username}
                          userEmail="testID.test.com"
                          public={bookInfo.publisher}
                          title={bookInfo.title}
                          hit="true"
                          author={bookInfo.author}
                          content={bookInfo.contentText}
                          description={bookInfo.description}
                          like={e.heartCount}
                          isLike={e.hearted} //좋아요 여부 체크용
                          cmt={e.commentCount}
                        />
                      </Link>
                    );
                  })
                )}
              </div>
            </div>
          ) : (
            <div className={`${styles['list-parent']} ${styles.loading}`}>
              <p>게시물 정보를 불러오고 있어요</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default YourPage;
