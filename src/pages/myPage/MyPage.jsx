import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProfileCard from '../../components/mypage/ProfileCard';
import EmptyList from '../../components/mypage/EmptyList';
import PostSection from '../main/PostSection';
import styles from './css/myPage.module.css';

const MyPage = () => {
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');
  const baseUrl = 'https://api.mandarin.weniv.co.kr';

  const [myInfo, setMyInfo] = useState(null);
  const [postList, setPostList] = useState();
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  const [isPostLoading, setIsPostLoading] = useState(true);

  //유저작성 게시물 정보 API
  const getPostFn = (accName) => {
    const reqUrl = baseUrl + `/post/${accName}/userpost`;
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
  //유저정보 API
  const getMyInfoFn = () => {
    const reqUrl = baseUrl + '/user/myinfo';
    axios
      .get(reqUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (res) {
        setMyInfo(res.data.user);
        localStorage.setItem('accname', res.data.user.accountname);
        setIsProfileLoading(false);
        //accountname -> 게시물 API함수 매변수로 전달
        getPostFn(res.data.user.accountname);
      })
      .catch(function (error) {
        alert('유저 정보를 불러오지 못했습니다');
      });
  };

  //화면이 로드될 때 유저정보 및 게시물 API 실행
  useEffect(() => {
    getMyInfoFn();
  }, []);

  return (
    <div className={styles.pageWrap}>
      <section className={styles.contentArea}>
        <h2 className={styles.pageTitle}>My Page</h2>
        <h3 className={styles.myPageTopBanner}>
          <strong>{myInfo?.username}님 안녕하세요🖐</strong>
          <p>오늘도 책 읽기 좋은 날씨네요!</p>
          <img src={process.env.PUBLIC_URL + '/images/books.png'} alt="" />
        </h3>
        <div className={styles['big-container']}>
          {/* 프로필 정보 */}
          {isProfileLoading === false ? (
            <div className={styles['profile-parent']}>
              <ProfileCard
                imgSrc={myInfo.image}
                accName={myInfo.accountname}
                userName={myInfo.username}
                userEmail={email}
                follower={myInfo.followerCount}
                following={myInfo.followingCount}
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
                    <p className={styles.center}>나의 독서 노트</p>
                  </div>
                  <p className={styles.right}>총 {postList?.length}건</p>
                </div>
                {/* 마이페이지 > 메인 게시물 리스트 */}
                {postList.length === 0 ? (
                  <EmptyList
                    text1="아직 독서노트가 기록되지 않았어요"
                    text2="책을 읽고 기록을 남겨보세요!"
                  />
                ) : (
                  postList.map((e) => {
                    const bookInfo = JSON.parse(e.content);
                    return (
                      <Link to={`/postdetails/${e.id}`} key={e.id}>
                        <PostSection
                          key={e.id}
                          date={e.createdAt.replace(/T.*/, '')}
                          imgSrc={e.author.image}
                          bookImgSrc={e.image}
                          postId={e.id} //게시물 id
                          accName={e.author.accountname} //게시물 클릭 시 해당 유저 프로필 페이지 이동용
                          userName={e.author.username}
                          public={bookInfo.publisher}
                          title={bookInfo.title}
                          hit="true"
                          author={bookInfo.author}
                          content={bookInfo.contentText}
                          description={bookInfo.description}
                          like={e.heartCount} //좋아요 여부 체크용
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
            <div className={`${styles['list-parent']} ${styles.loading}`}>
              <p>게시물 정보를 불러오고 있어요</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyPage;
