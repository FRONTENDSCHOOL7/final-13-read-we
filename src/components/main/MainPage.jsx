import React, { useState, useEffect } from 'react';
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
import EmptyList from '../mypage/EmptyList';
import HandlePost from '../../util/postUtil';

const MainPage = () => {
  const [posts, setPosts] = useState([]);
  const [userName, setUserName] = useState('');
  const [searchUserRes, setSearchUserRes] = useState([]); // 유저검색 결과
  const handlePostBtn = HandlePost(); // postUtil 함수불러오기.
  const token = localStorage.getItem('token');
  const baseUrl = 'https://api.mandarin.weniv.co.kr';

  useEffect(() => {
    const fetchPosts = async () => {
      const reqUrl = baseUrl + '/post/feed';

      const res = await fetch(reqUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': `application/json`,
        },
      });
      const json = await res.json();
      setPosts(json.posts);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (userName) {
      const fetchUsers = async () => {
        const reqUrl = baseUrl + '/user/searchuser/?keyword=' + userName;
        const res = await fetch(reqUrl, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': `application/json`,
          },
        });
        const json = await res.json();
        setSearchUserRes(json); // 여기서 검색 결과를 상태에 저장
        console.log(json); // 검색된 유저를 콘솔에 출력
      };
      fetchUsers();
    } else {
      setSearchUserRes([]); // 키워드가 비었을 때는 검색 결과를 비웁니다
    }
  }, [userName]);

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
              onClick={handlePostBtn}
            >
              POST
            </BasicBtn>
            <IconIpt>
              <BasicIpt
                sm="true"
                placeholder="유저검색"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <i class="icon icon-search" />
            </IconIpt>
            <div className={styles.searchUser}>
              {searchUserRes.map((user) => (
                <div key={user._id}>
                  {user.username} ({user.accountname})
                </div>
              ))}
            </div>
          </div>
          <div className={styles.MainPostContainer}>
            <div className={styles.HomeButton}>
              <button>Home</button>
            </div>
            <MainPostCard
              imgSrc="icon/testProfile.png"
              onClick={handlePostBtn}
            />
            {posts.length === 0 ? (
              <EmptyList />
            ) : (
              posts.map((post) => (
                // eslint-disable-next-line react/jsx-key
                <PostSection
                  date={post.createdAt}
                  imgSrc={post.image}
                  userName={post.author.username}
                  userEmail={post.author.accountname}
                  public="출판사 명"
                  title="책 제목"
                  hit="true"
                  author="작가"
                  content={post.content}
                  like={post.heartCount}
                  cmt=""
                />
              ))
            )}
          </div>
          <div className={styles.MainRightContainer}>
            <IconIpt>
              <BasicIpt sm="true" placeholder="책검색" />
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
