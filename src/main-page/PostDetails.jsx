import React, { useEffect, useState } from 'react';
import styles from './PostDetails.module.css';
import Header from '../Header';
import MainCard from '../components/main/PostSection';
import CmtList from './CmtList';

const PostDetails = () => {
  const [cmt, setCmt] = useState('');
  const [cmtList, setCmtList] = useState([]);

  const leaveCmt = async (cmt) => {
    const baseUrl = 'https://api.mandarin.weniv.co.kr';
    const reqPath = '/post/653f653cb2cb205663908e4f/comments';
    const reqUrl = baseUrl + reqPath;
    const token = localStorage.getItem('token');

    const cmtData = {
      comment: {
        content: cmt,
      },
    };

    try {
      await fetch(reqUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(cmtData),
      });
    } catch (error) {
      alert('댓글 작성에 실패했습니다.');
    }
  };

  const getCmtList = async () => {
    const baseUrl = 'https://api.mandarin.weniv.co.kr';
    const reqPath = '/post/653f653cb2cb205663908e4f/comments';
    const reqUrl = baseUrl + reqPath;
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(reqUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });

      const json = await res.json();
      const list = json.comments;
      setCmtList(list);
    } catch (error) {
      console.error('존재하지 않는 게시글입니다.');
    }
  };

  const handleCmtChange = (e) => {
    setCmt(e.target.value);
  };

  const submitCmt = (e) => {
    e.preventDefault();
    leaveCmt(cmt);
  };

  useEffect(() => {
    getCmtList();
  }, [cmtList]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.innerContainer}>
        <h2 className="a11y-hidden">게시물 상세 페이지</h2>
        <MainCard />
        <div className={styles.cmtContainer}>
          <h2 className="a11y-hidden">댓글 목록</h2>
          <CmtList cmtList={cmtList} />
        </div>
        <form className="input-btn" onSubmit={submitCmt}>
          <input
            type="text"
            placeholder="댓글을 입력하세요."
            className="basic"
            value={cmt}
            onChange={handleCmtChange}
          />
          <button type="submit" className="basic" disabled={!cmt}>
            등록
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostDetails;
