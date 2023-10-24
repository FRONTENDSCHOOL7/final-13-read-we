function ComponentEx() {
  return (
    <div>
      <h1>컨포넌트 스타일 예시</h1>
      <div className="ex-wrap">
        {/*================== 인풋 ==================*/}
        <div className="ex-content">
          <h2>input</h2>
          <p>----basic</p>
          <input type="text" placeholder="인풋 기본 스타일" className="basic" />
          <p>----label + basic</p>
          <label className="input-label">
            <input
              type="text"
              placeholder="인풋 기본 스타일"
              className="basic"
            />
            영문 소문자 또는 영문 소문자, 숫자 조합 6~12 자리
          </label>
          <p>----basic:disabled</p>
          <input
            type="text"
            placeholder="기본스타일 disabled 처리"
            className="basic"
            disabled
          />
          <p>----basic, gray</p>
          <input
            type="text"
            placeholder="gray class-회색변경class"
            className="basic gray"
          />
          <p>----basic, gray, icon</p>
          <div className="input-icon">
            <i className="icon icon-lock-w"></i>
            <input
              type="text"
              placeholder="인풋스타일1 + 아이콘 인풋"
              className="basic gray"
            />
          </div>
          <p>----input size</p>
          <input type="text" placeholder="md" className="basic md" />
          <input type="text" placeholder="sm" className="basic sm" />
          <input type="text" placeholder="xsm" className="basic xsm" />
        </div>

        {/*================== 버튼 ==================*/}
        <div className="ex-content">
          <h2>button</h2>
          <p>----basic</p>
          <button type="button" className="basic">
            버튼 기본 스타일
          </button>
          <p>----basic:disabled</p>
          <button type="button" className="basic" disabled>
            버튼 기본 스타일 disabled 처리
          </button>
          <p>----basic, orange</p>
          <button type="button" className="basic orange">
            "orange" class = 배경색 변경
          </button>
          <p>----basic, line</p>
          <button type="button" className="basic line">
            "line" class = 스타일 변경
          </button>
          <p>----basic, round-full</p>
          <button type="button" className="basic round-full">
            "round-full" class = 버튼 full라운드 처리
          </button>
          <p>----basic, round-none</p>
          <button type="button" className="basic round-none">
            "round-none" class = 버튼 라운드 해제
          </button>
          <p>----basic, shadow-none</p>
          <button type="button" className="basic shadow-none">
            "shadow-none" class = 버튼 그림자 해제
          </button>
          <div>
            <p>----버튼 사이즈</p>
            <button type="button" className="basic md">
              버튼 md
            </button>
            <button type="button" className="basic sm">
              버튼 sm
            </button>
            <button type="button" className="basic xsm">
              버튼 xsm
            </button>
          </div>
        </div>
        {/*================== 아이콘 ==================*/}
        <div className="ex-content full row">
          <h2>icon</h2>
          <i className="icon icon-user-g"></i>
          <i className="icon icon-lock-g"></i>
          <i className="icon icon-user-w"></i>
          <i className="icon icon-lock-w"></i>
          <i className="icon icon-email-w"></i>
          <i className="icon icon-setting"></i>
          <i className="icon icon-dot"></i>
          <i className="icon icon-home"></i>
          <i className="icon icon-chat"></i>
          <i className="icon icon-book"></i>
          <i className="icon icon-my"></i>
          <i className="icon icon-like"></i>
          <i className="icon icon-like-active"></i>
          <i className="icon icon-comment"></i>
          <i className="icon icon-search"></i>
          <i className="icon icon-search-btn"></i>
          <i className="icon icon-share"></i>
          <i className="icon icon-star"></i>
          <i className="icon icon-star-active"></i>
        </div>

        {/*================== 태그 ==================*/}
        <div className="ex-content full row">
          <h2>tag</h2>
          <span className="tag gray">태그스타일 1</span>
          <span className="tag orange">태그스타일 2</span>
          <span className="tag hit">HIT</span>
        </div>

        {/*================== 기타 요소들 ==================*/}
        <div className="ex-content full">
          <h2>obj</h2>
          <p>----메인 프로필 표시</p>
          <div className="acc-bar">
            <div className="acc-img">
              <img
                alt="프로필 이미지"
                src={process.env.PUBLIC_URL + '/images/icon/testProfile.png'}
              />
            </div>
            <div className="acc-text">
              <strong className="acc-id">mewmew</strong>
              <span className="acc-email">testID.test.com</span>
            </div>
            <button type="button">
              <i className="icon icon-dot"></i>
            </button>
          </div>

          <p>----좋아요/댓글</p>
          <div className="like-comment">
            <button className="like-counter">
              <i className="icon icon-like"></i>
              <strong>250</strong>
            </button>
            <button className="comment-counter">
              <i className="icon icon-comment"></i>
              <strong>250</strong>
            </button>
          </div>

          <p>----nav</p>
          <ul className="home-nav">
            {/* active class 추가 시 활성화 */}
            <li>
              <a href="#" className="home-nav-list active">
                <i className="icon icon-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="home-nav-list">
                <i className="icon icon-chat"></i>
                <span>Chat</span>
              </a>
            </li>
            <li>
              <a href="#" className="home-nav-list">
                <i className="icon icon-book"></i>
                <span>Book</span>
              </a>
            </li>
            <li>
              <a href="#" className="home-nav-list">
                <i className="icon icon-my"></i>
                <span>My Page</span>
              </a>
            </li>
          </ul>

          <p>----검색 바</p>
          <div className="input-icon">
            <i className="icon icon-search"></i>
            <input
              type="text"
              placeholder="인풋스타일1 + 아이콘 인풋"
              className="basic sm"
            />
          </div>

          <p>----댓글 등록</p>
          <form className="input-btn">
            <input
              type="text"
              placeholder="인풋 + 버튼 혼합"
              className="basic"
            />
            <button type="submit" className="basic">
              등록
            </button>
          </form>

          <p>----메인-게시물 리스트</p>
          <ul className="home-post">
            <li>
              <a href="#" className="home-post-list">
                <div className="post-info">
                  <div className="user">
                    <div className="img-wrap">
                      <img
                        alt="프로필 이미지"
                        src={
                          process.env.PUBLIC_URL +
                          '/images/icon/testProfile.png'
                        }
                      />
                    </div>
                    <span>
                      by
                      <strong>username</strong>
                    </span>
                  </div>
                  <div className="ect">
                    <div className="like-comment">
                      <button className="like-counter">
                        <i className="icon icon-like"></i>
                        <strong>250</strong>
                      </button>
                      <button className="comment-counter">
                        <i className="icon icon-comment"></i>
                        <strong>250</strong>
                      </button>
                      <i className="icon icon-share"></i>
                      <span>Oct.10.2023</span>
                    </div>
                  </div>
                </div>
                <div className="post-content">
                  <div className="book-search-bth">
                    <button type="button">
                      <img
                        alt="프로필 이미지"
                        src={
                          process.env.PUBLIC_URL +
                          '/images/icon/testProfile.png'
                        }
                      />
                      <p>
                        책 정보 보기
                        <i className="icon icon-search-btn"></i>
                      </p>
                    </button>
                  </div>
                  <div className="book-info">
                    <h3 className="book-info-title">
                      누구나 쉽게 배우는 자바스크립트
                      <span className="tag hit">HIT</span>
                    </h3>
                    <div className="book-score">
                      <i className="icon icon-star-active"></i>
                      <i className="icon icon-star-active"></i>
                      <i className="icon icon-star-active"></i>
                      <i className="icon icon-star-active"></i>
                      <i className="icon icon-star"></i>
                      <span className="book-score-text">4.9점</span>
                    </div>
                    <div className="book-author">
                      <p>
                        농담곰이
                        <span>저</span>
                      </p>
                      <p>
                        dalgomi
                        <span>출판</span>
                      </p>
                    </div>
                    <p className="book-content">
                      제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가
                      있어야 하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야
                      한다. 다만, 대통령에 대한 탄핵소추는 국회재적의원 과반수의
                      발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.
                    </p>
                    <div className="tag-wrap">
                      <span className="tag gray">에세이</span>
                      <span className="tag gray">고양이</span>
                      <span className="tag gray">만화</span>
                    </div>
                  </div>
                </div>
                <div className="post-footer">
                  <div className="like-comment">
                    <button className="like-counter">
                      <i className="icon icon-like"></i>
                      <strong>250</strong>
                    </button>
                    <button className="comment-counter">
                      <i className="icon icon-comment"></i>
                      <strong>250</strong>
                    </button>
                  </div>
                </div>
              </a>
            </li>
          </ul>

          <p>----프로필 수정 버튼</p>
          <a href="#" className="acc-setting">
            <i className="icon icon-setting"></i>
            <strong>프로필 수정</strong>
          </a>
          <p>----프로필 정보</p>
          <div className="acc-info">
            <div className="acc-img">
              <img
                alt="프로필 이미지"
                src={process.env.PUBLIC_URL + '/images/icon/testProfile.png'}
              />
            </div>
            <strong className="acc-id">mewmew</strong>
            <span className="acc-email">testID.test.com</span>
          </div>

          <p>----팔로워 / 팔로잉</p>
          <a href="#" className="acc-counter">
            팔로워 | <strong className="num">225</strong>
          </a>
          <a href="#" className="acc-counter">
            팔로잉 | <strong className="num">225</strong>
          </a>
        </div>

        {/*================== 모달 팝업 ==================*/}
        <div className="ex-content full modal-area">
          {/* 모달 팝업 영역 */}
          <div className="modal-wrap">
            <h3 className="modal-title">도서 상세 정보</h3>
            <div className="modal-content row-2">
              <div className="row-2">
                <div className="book-info-obj">
                  <img
                    alt="책 이미지"
                    src={process.env.PUBLIC_URL + '/images/testBook.png'}
                  />
                  <button
                    type="button"
                    className="basic w-100 round-full line md"
                  >
                    <i className="icon icon-star"></i> 책 찜하기
                  </button>
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
                    <span>출판사 |</span> BJPUBLIC
                  </strong>
                  <h3 className="book-title">
                    누구나 쉽게 배우는 자바스크립트
                  </h3>
                  <div>
                    <span className="tag orange">지은이 / 옮긴이</span>
                    <strong class="book-author">닉 모건 / 김태곤,이미령</strong>
                  </div>
                  <p class="book-content scrollArea">
                    제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야
                    하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다.
                    제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야
                    하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다.
                    제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야
                    하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다.
                    다만, 대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와
                    국회재적의원 3분의 2 이상의 찬성이 있어야 한다.제1항의
                    탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야하며, 그
                    의결은 국회재적의원 과반수의 찬성이 있어야 한다.다만,
                    대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와
                    국회재적의원3분의 2 이상의 찬성이 있어야 한다.제1항의
                    탄핵소추는국회재적의원 3분의 1 이상의 발의가 있어야하며,그
                    의결은 국회재적의원 과반수의 찬성이 있어야 한다.다만,
                    대통령에 대한 탄핵소추는 국회재적의원 과반수
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="row-2">
                <p className="notice-text">
                  찜한 목록은 [마이페이지]에서 볼 수 있어요!
                </p>
                <button type="button" className="basic sm round-full">
                  구매하기
                </button>
              </div>
            </div>
            <button
              type="button"
              className="basic orange basic shadow-none round-none w-100"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentEx;
