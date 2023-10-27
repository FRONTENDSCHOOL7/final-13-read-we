import React from 'react';
import styles from './PostDetails.module.css';
import Header from '../Header';
import MainCard from '../components/main/PostSection';
import CmtList from './CmtList';

const PostDetails = () => {
  // 임시 Mock Data
  const cmtList = [
    {
      imgSrc: 'icon/testProfile.png',
      userName: '예리니최고양',
      cmt: '퍼가요~♡',
      date: 'Oct.10.2023',
    },
    {
      imgSrc: 'icon/testProfile.png',
      userName: '승미승미',
      cmt: '좋은 글 잘 봤습니다.',
      date: 'Oct.10.2023',
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.innerContainer}>
        <h2 className="a11y-hidden">게시물 상세 페이지</h2>
        <MainCard
          imgSrc=""
          userName="johndoe"
          date="2023.10.16"
          title="1984"
          hit="true"
          author="조지 오웰"
          public="을유문화사"
          content="조지 오웰의 대표작이자 생애 마지막 소설 『1984년』. 50년 만에 부활한 정통 세계문학 시리즈 「을유세계문학전집」의 48번째 책이다. 헉슬리의 <멋진 신세계>, 자미아틴의 <우리>와 함께 20세기 디스토피아 문학의 걸작으로 꼽히는 이 소설은 전체주의가 지배하는 미래 사회에 대한 암울한 상상을 보여준다."
          cmt="5"
          like="24"
        />
        <div className={styles.cmtContainer}>
          <h2 className="a11y-hidden">댓글 목록</h2>
          <CmtList cmtList={cmtList} />
        </div>
        <form className="input-btn">
          <input type="text" placeholder="댓글을 입력하세요." class="basic" />
          <button type="submit" class="basic">
            등록
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostDetails;
