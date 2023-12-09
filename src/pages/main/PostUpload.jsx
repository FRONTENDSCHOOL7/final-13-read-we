import React, { useState } from 'react';
import styles from './css/PostUpload.module.css';
import { BasicBtn } from '../../components/button/BtnStyle';
import { BasicIpt } from '../../components/input/IptStyle';
import BookSearchDetailModal from './BookSearchDetailModal';
import { useNavigate } from 'react-router-dom';

const PostUpload = () => {
  const [modal, setModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [content, setContent] = useState('');
  //구매 링크
  const [buyLink, setBuyLink] = useState('');
  //도서 평점(HIT 여부 체크용: customerReviewRank항목이 6점이상일 경우)
  const [hitScore, setIshitScore] = useState('');
  //별점 아이콘 상태관리용
  const [scoreIcon, setScoreIcon] = useState([
    'icon icon-star',
    'icon icon-star',
    'icon icon-star',
    'icon icon-star',
    'icon icon-star-active',
  ]);
  const [score, setScore] = useState(1);
  const navigate = useNavigate();

  //별점기능
  const scoreFn = (e) => {
    setScore(e.target.innerHTML);
    setScoreIcon(
      scoreIcon.map((icon, i) => {
        if (scoreIcon.length - i <= e.target.innerHTML) {
          return 'icon icon-star-active';
        }
        return 'icon icon-star';
      }),
    );
  };

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
    setBuyLink(selectedBook.link);
    setIshitScore(selectedBook.customerReviewRank);
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
      buyLink: buyLink,
      score: score,
      hitScore: hitScore,
    });
    e.preventDefault();
    uploadPost(postDetails, selectedBook.cover);
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
    <div className={styles.pageWrap}>
      <div className={styles.contentArea}>
        <h2 className={styles.pageTitle}>게시물 등록</h2>
        <div className={styles.postInfoBox}>
          <section className={styles.sectionBookInfo}>
            <h3 className={styles.sectionTitle}>
              <strong>STEP 1.</strong> 기록을 작성할 책을 선택해 주세요
            </h3>
            <div className={styles.bookInfo}>
              {!selectedBook ? (
                <img
                  className={styles.noImage}
                  alt="도서 이미지"
                  src={process.env.PUBLIC_URL + '/images/book1.png'}
                />
              ) : (
                <div className={styles.imgWrap}>
                  <img alt="도서 이미지" src={selectedBook.cover} />
                </div>
              )}
              <div className={styles.postInput}>
                <BasicIpt sm="true" placeholder="제목" value={title} disabled />
                <BasicIpt
                  sm="true"
                  placeholder="지은이"
                  value={author}
                  disabled
                />
                <BasicIpt
                  sm="true"
                  placeholder="출판사"
                  value={publisher}
                  disabled
                />
                <div className={styles.bookUpload}>
                  <button
                    type="button"
                    className="basic sm"
                    onClick={() => setModal(true)}
                  >
                    <i className="icon icon-search-btn" /> 책 등록하기
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.sectionPostInfo}>
            <h3 className={styles.sectionTitle}>
              <strong>STEP 2.</strong> 기록을 작성해 주세요
            </h3>
            <div className={styles.starScoreBox}>
              <strong className={styles.subTitle}>별점</strong>
              <div className={styles.starScore}>
                {scoreIcon.map((e, i) => {
                  return (
                    <i
                      key={scoreIcon.length - i}
                      className={e}
                      onClick={(e) => {
                        scoreFn(e);
                      }}
                    >
                      {scoreIcon.length - i}
                    </i>
                  );
                })}
                <strong className={styles.scoreResult}>
                  <span>{score}</span>/5 점
                </strong>
              </div>
            </div>
            <form className={styles.postInfo} onSubmit={submitPost}>
              <strong className={styles.subTitle}>내용</strong>
              <textarea
                rows="20"
                placeholder="내용을 입력하세요."
                value={content}
                onChange={handleContentChange}
              />
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
                <BasicBtn md="true" disabled={!content || !title}>
                  게시물 등록하기
                </BasicBtn>
              </div>
            </form>
          </section>
        </div>
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
