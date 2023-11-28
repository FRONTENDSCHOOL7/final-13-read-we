import React, { useEffect, useState } from 'react';
import styles from './PostDetails.module.css';
import PostSection from '../main/PostSection';
import CmtList from './CmtList';
import { useParams } from 'react-router-dom';
import EmptyList from '../../components/mypage/EmptyList';

const PostDetails = () => {
  const [post, setPost] = useState(null);
  const [cmt, setCmt] = useState('');
  const [cmtList, setCmtList] = useState([]);
  const { postId } = useParams();

  const getPost = async () => {
    const baseUrl = 'https://api.mandarin.weniv.co.kr';
    const reqPath = `/post/${postId}`;
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
      setPost(json.post);
    } catch (error) {
      alert('존재하지 않는 게시글입니다.');
    }
  };

  const leaveCmt = async (cmt) => {
    const baseUrl = 'https://api.mandarin.weniv.co.kr';
    const reqPath = `/post/${postId}/comments`;
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
    const reqPath = `/post/${postId}/comments`;
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
    getPost();
  }, []);

  useEffect(() => {
    getCmtList();
  }, [cmtList]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2 className="a11y-hidden">게시물 상세 페이지</h2>
        {post ? (
          <PostSection
            key={post.id}
            date={post.createdAt.replace(/T.*/, '')}
            imgSrc={
              'https://api.mandarin.weniv.co.kr/' +
              post.author.image.replace(/^.*\//, '')
            }
            bookImgSrc={post.image}
            //게시물 id
            postId={post.id}
            //게시물 클릭 시 해당 유저 프로필 페이지 이동용
            accName={post.author.accountname}
            userName={post.author.username}
            userEmail="testID.test.com"
            public={JSON.parse(post.content).publisher}
            title={JSON.parse(post.content).title}
            hit="true"
            author={JSON.parse(post.content).author}
            hasDetail="true"
            content={JSON.parse(post.content).contentText}
            description={JSON.parse(post.content).description}
            like={post.heartCount}
            //좋아요 여부 체크용
            isLike={post.hearted}
            cmt={post.commentCount}
          />
        ) : (
          <EmptyList />
        )}
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
