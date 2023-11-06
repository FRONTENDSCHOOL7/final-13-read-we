import React, { useState } from 'react';
import styles from './PostUpload.module.css';
import { BasicBtn } from '../components/button/BtnStyle';
import { BasicIpt } from '../components/input/IptStyle';
import BookSearchDetailModal from './BookSearchDetailModal';
import { useNavigate } from 'react-router-dom';

const PostUpload = () => {
  const [modal, setModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const closePopup = () => {
    setModal(false);
    // setSelectedBook(null);
  };

  // 선택한 도서 정보를 받아 입력 필드에 동적으로 할당하는 함수
  const handleBookSelect = (selectedBook) => {
    setSelectedBook(selectedBook);
    setTitle(selectedBook.title);
    setAuthor(selectedBook.author);
    setPublisher(selectedBook.publisher);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const submitPost = (e) => {
    const postDetails = JSON.stringify({
      title: title,
      author: author,
      publisher: publisher,
      contentText: content,
      description: selectedBook.description,
    });
    e.preventDefault();
    uploadPost(postDetails, selectedBook.img);
  };

  const uploadPost = async (content, image) => {
    const baseUrl = 'https://api.mandarin.weniv.co.kr';
    const reqPath = '/post';
    const reqUrl = baseUrl + reqPath;
    const token = localStorage.getItem('token');

    const postData = {
      post: {
        content: content,
        image: image,
      },
    };

    try {
      await fetch(reqUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      alert('게시물을 등록했습니다.');
      navigate('/main');
    } catch (error) {
      alert('게시물 등록에 실패했습니다.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2>게시물 등록</h2>
        <div className={styles.bookInfo}>
          <div className={styles.imgWrap}>
            <img
              alt="도서 이미지"
              src={
                selectedBook &&
                process.env.PUBLIC_URL + '/images/' + selectedBook.img
              }
            />
          </div>
          <div className={styles.postInput}>
            <BasicIpt xsm="true" placeholder="제목" value={title} />
            <BasicIpt xsm="true" placeholder="지은이" value={author} />
            <BasicIpt xsm="true" placeholder="출판사" value={publisher} />
            <div className={styles.bookUpload}>
              <button
                type="button"
                class="basic sm"
                onClick={() => setModal(true)}
              >
                <i className="icon icon-search-btn" /> 책 등록하기
              </button>
            </div>
          </div>
        </div>
        <form className={styles.postInfo} onSubmit={submitPost}>
          <textarea
            rows="20"
            placeholder="내용을 입력하세요."
            value={content}
            onChange={handleContentChange}
          ></textarea>
          <div className={styles.buttonWrap}>
            <BasicBtn
              md="true"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/main');
              }}
            >
              취소
            </BasicBtn>
            <BasicBtn md="true" disabled={!content}>
              게시물 등록하기
            </BasicBtn>
          </div>
        </form>
      </div>
      {modal && (
        <BookSearchDetailModal
          closePopup={closePopup}
          onBookSelect={handleBookSelect}
        />
      )}
    </div>
  );
};

export default PostUpload;
