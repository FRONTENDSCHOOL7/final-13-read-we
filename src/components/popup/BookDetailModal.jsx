import React, { useEffect } from 'react';
import { BasicBtn } from '../button/BtnStyle';

//모달팝업 표시 시 화면 스크롤 방지 함수
const BookDetailModal = (props) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  const closePopup = () => {
    props.closePopup();
  };
  return (
    <div className="modal-area">
      <div className="modal-bg" />
      <div className="modal-wrap">
        <h3 className="modal-title">도서 상세 정보</h3>
        <div className="modal-content row-2">
          <div className="row-2">
            <div className="book-info-obj">
              <img
                alt="책 이미지"
                // 알라딘 API로 받아온 이미지와 로컬 이미지 url case구분
                src={
                  /aladin/i.test(props.bookImgSrc)
                    ? props.bookImgSrc
                    : process.env.PUBLIC_URL + `/images/${props.bookImgSrc}`
                }
              />
              {/* <BasicBtn md="true" linestyle="true" round="100px" wid="100%">
                <i className="icon icon-star" /> 책 찜하기
              </BasicBtn> */}
              {/* 이미 찜한 책일 경우 */}
              {/* <button
                type="button"
                className="basic w-100 round-full line md"
              >
                <i className="icon icon-star-active"></i> 찜한 책
              </button> */}
            </div>
            <div className="book-info-text">
              <strong className="book-public">
                <span>출판사 |</span> {props.public}
              </strong>
              <h3 className="book-title">{props.title}</h3>
              <div>
                <span className="tag orange">지은이 / 옮긴이</span>
                <strong className="book-author">{props.author}</strong>
              </div>
              <p className="book-content scrollArea">{props.description}</p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="row-2">
            <p className="notice-text">
              [구매하기]버튼 클릭 시 도서를 구매 할 수 있는 사이트로 이동합니다.
            </p>
            <BasicBtn
              sm="true"
              round="100px"
              onClick={() => {
                props.buyLink
                  ? window.open(props.buyLink)
                  : alert('준비중 입니다');
              }}
            >
              구매하기
            </BasicBtn>
          </div>
        </div>
        <BasicBtn
          round="0px"
          bgcolor="#E87C3E"
          shadow="none"
          wid="100%"
          onClick={closePopup}
        >
          확인
        </BasicBtn>
      </div>
    </div>
  );
};

export default BookDetailModal;
