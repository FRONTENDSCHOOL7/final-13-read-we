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
import SearchModal from '../../main-page/SearchModal';
import { Navigate, useNavigate } from 'react-router-dom';

const MainPage = ({ image }) => {
  const [posts, setPosts] = useState([]);
  const [userName, setUserName] = useState('');
  const [profile, setProfile] = useState(null);
  const [showBookSearchModal, setShowBookSearchModal] = useState(false);
  const [searchUserRes, setSearchUserRes] = useState([]); // 유저검색 결과
  const accName = localStorage.getItem('accname'); // 로컬스토리지에서 accname 받아오기
  const handlePostBtn = HandlePost(); // postUtil 함수불러오기.
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const baseUrl = 'https://api.mandarin.weniv.co.kr';

  const showModal = () => {
    setShowBookSearchModal(true);
  };
  const hideModal = () => {
    setShowBookSearchModal(false);
  };
  //유저정보 불러오기
  useEffect(() => {
    const getMyinfo = async () => {
      const reqUrl = baseUrl + '/user/myinfo';
      const res = await fetch(reqUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await res.json();
      setProfile(json);
    };
    getMyinfo();
  }, []);

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
      };
      fetchUsers();
    } else {
      setSearchUserRes([]); // 키워드가 비었을 때는 검색 결과를 비웁니다
    }
  }, [userName]);
  return (
    <div className={styles.container}>
      <div className={styles.MainContainer}>
        <div className={styles.outerContainer}>
          <div className={styles.MProFloat}>
            <MainProfileCard
              img={baseUrl + '/' + profile?.user.image.replace(/^.*\//, '')}
              userName={profile?.user.username}
              userEmail={localStorage.getItem('email')}
            />
          </div>
          <div className={styles.MainLeftContainer}>
            <MainNavBtn />
            <div className={styles.searchUserContainer}>
              <h3 className={styles.searchUserTitle}>유저검색</h3>
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
                <ul>
                  {/* 검색어를 입력하지 않았을 경우 */}
                  {userName === '' && searchUserRes.length === 0 ? (
                    <li className={styles.searchUserResultNoinput}>
                      팔로우 하고 싶은 계정을
                      <br />
                      검색해 보세요!
                    </li>
                  ) : (
                    ''
                  )}
                  {/* 검색 결과가 없는 경우 */}
                  {userName !== '' && searchUserRes.length === 0 ? (
                    <li className={styles.searchUserResultNone}>
                      검색결과가 없습니다.
                    </li>
                  ) : (
                    ''
                  )}
                  {searchUserRes.map((user) => (
                    <li>
                      <a
                        href="#"
                        key={user._id}
                        onClick={() => {
                          localStorage.setItem('otherName', user.accountname);
                          navigate(
                            user.accountname !== accName
                              ? '/yourpage'
                              : '/mypage',
                          );
                        }}
                      >
                        <div className={styles.searchUserResult}>
                          <span>{user.username}</span>
                          <span>{user.accountname}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.MainPostContainer}>
            <div className={styles.HomeButton}>
              <button>Home</button>
            </div>
            <MainPostCard
              img={baseUrl + '/' + profile?.user.image.replace(/^.*\//, '')}
              onClick={handlePostBtn}
            />
            {posts.length === 0 ? (
              <EmptyList />
            ) : (
              posts.map((e) => {
                const bookInfo = JSON.parse(e.content);
                return (
                  <PostSection
                    key={e.id}
                    date={e.createdAt.replace(/T.*/, '')}
                    imgSrc={baseUrl + '/' + e.author.image.replace(/^.*\//, '')}
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
          <div className={styles.MainRightContainer}>
            <IconIpt>
              <BasicIpt sm="true" placeholder="책검색" onClick={showModal} />
              <i class="icon icon-search" />
            </IconIpt>
            {showBookSearchModal && <SearchModal hideModal={hideModal} />}
            <Trend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
