import React, { useEffect, useState } from 'react';
import styles from './css/myPage.module.css';
import { BasicBtn } from '../components/button/BtnStyle';
import Header from '../Header';

const MyLibrary = () => {
  const token = localStorage.getItem('token');
  const baseUrl = 'https://api.mandarin.weniv.co.kr';

  const [myInfo, setMyInfo] = useState();
  const [isProfileLoading, setIsProfileLoading] = useState(true);

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
      console.log(myInfo);
    };
    getMyInfo();
  }, []);

  const [tab, setTab] = useState(0);

  return (
    <>
      {isProfileLoading == false ? (
        <>
          <Header />
          <div className={styles.pageWrap}>
            <section className={styles.contentArea}>
              <h2 className={styles.pageTitle}>내 서재</h2>
              <h3 className={styles.myLibraryTopBanner}>
                <strong>{myInfo.user.username}님의 서재에요</strong>
                <p>지금까지 읽은 책과 내 독서 현황을 알수 있는 공간입니다!</p>
                <img
                  src={process.env.PUBLIC_URL + '/images/StackUpBooks_2.png'}
                />
              </h3>
              <div className={styles.topArea}>
                <article className={styles.myLibraryBoxBlack}>
                  <h4>월 별 독서 기록</h4>
                  <ul className={styles.myLibraryMonth}>
                    <li className={styles.nowMonth}>
                      <strong>이번달 읽은 책</strong>
                      <div>
                        <strong className={styles.counter}>6</strong>
                        <span>권</span>
                      </div>
                    </li>
                    <li>
                      <strong>9월에 읽은 책</strong>
                      <div>
                        <strong className={styles.counter}>10</strong>
                        <span>권</span>
                      </div>
                    </li>
                    <li>
                      <strong>8월에 읽은 책</strong>
                      <div>
                        <strong className={styles.counter}>1</strong>
                        <span>권</span>
                      </div>
                    </li>
                  </ul>
                </article>
                <article className={styles.myLibraryBox}>
                  <h4>내가 많이 읽은 장르</h4>
                  <div>여기 어쩌죠...흐흐...</div>
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
                  {tab == 0 ? (
                    <>
                      <li className={styles.MybookListObj}>
                        <div className={styles.MybookListObjImg}>
                          <img
                            src={
                              process.env.PUBLIC_URL + '/images/testBook.png'
                            }
                          />
                        </div>
                        <p>누구나 쉽게 배우는 자바 스크립트</p>
                      </li>
                      <li className={styles.MybookListObj}>
                        <div className={styles.MybookListObjImg}>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              '/images/StackUpBooks.png'
                            }
                          />
                        </div>
                        <p>
                          누구나 쉽게 배우는 자바 스크립트누구나 쉽게 배우는
                          자바 스크립트
                        </p>
                      </li>
                      <li className={styles.MybookListObj}>
                        <div className={styles.MybookListObjImg}>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              '/images/StackUpBooks.png'
                            }
                          />
                        </div>
                        <p>
                          누구나 쉽게 배우는 자바 스크립트누구나 쉽게 배우는
                          자바 스크립트
                        </p>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className={styles.MybookListObj}>
                        <div className={styles.MybookListObjImg}>
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              '/images/icon/testProfile.png'
                            }
                          />
                        </div>
                        <p>
                          누구나 쉽게 배우는 자바 스크립트누구나 쉽게 배우는
                          자바 스크립트
                        </p>
                      </li>
                      <li className={styles.MybookListObj}>
                        <div className={styles.MybookListObjImg}>
                          <img
                            src={
                              process.env.PUBLIC_URL + '/images/testBook.png'
                            }
                          />
                        </div>
                        <p>누구나 쉽게 배우는 자바 스크립트</p>
                      </li>
                      <li className={styles.MybookListObj}>
                        <div className={styles.MybookListObjImg}>
                          <img
                            src={
                              process.env.PUBLIC_URL + '/images/testBook.png'
                            }
                          />
                        </div>
                        <p>누구나 쉽게 배우는 자바 스크립트</p>
                      </li>
                      <li className={styles.MybookListObj}>
                        <div className={styles.MybookListObjImg}>
                          <img
                            src={
                              process.env.PUBLIC_URL + '/images/testBook.png'
                            }
                          />
                        </div>
                        <p>누구나 쉽게 배우는 자바 스크립트</p>
                      </li>
                      <li className={styles.MybookListObj}>
                        <div className={styles.MybookListObjImg}>
                          <img
                            src={
                              process.env.PUBLIC_URL + '/images/testBook.png'
                            }
                          />
                        </div>
                        <p>누구나 쉽게 배우는 자바 스크립트</p>
                      </li>
                      <li className={styles.MybookListObj}>
                        <div className={styles.MybookListObjImg}>
                          <img
                            src={
                              process.env.PUBLIC_URL + '/images/testBook.png'
                            }
                          />
                        </div>
                        <p>누구나 쉽게 배우는 자바 스크립트</p>
                      </li>
                      <li className={styles.MybookListObj}>
                        <div className={styles.MybookListObjImg}>
                          <img
                            src={
                              process.env.PUBLIC_URL + '/images/testBook.png'
                            }
                          />
                        </div>
                        <p>누구나 쉽게 배우는 자바 스크립트</p>
                      </li>
                      <li className={styles.MybookListObj}>
                        <div className={styles.MybookListObjImg}>
                          <img
                            src={
                              process.env.PUBLIC_URL + '/images/testBook.png'
                            }
                          />
                        </div>
                        <p>누구나 쉽게 배우는 자바 스크립트</p>
                      </li>
                    </>
                  )}
                </ul>
              </article>
            </section>
          </div>
        </>
      ) : (
        <p>now loading</p>
      )}
    </>
  );
};

export default MyLibrary;
