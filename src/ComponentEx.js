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
          <i className="icon icon-share"></i>
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
                  <p>유저정보 / 업로드 정보</p>
                </div>
                <div className="post-content">
                  <p>책정보 / 리뷰</p>
                </div>
              </a>
            </li>
          </ul>

          <p>----마이페이지-프로필 카드</p>
          <article className="acc-card">
            <a href="#" className="acc-setting">
              <i className="icon icon-setting"></i>
              <strong>프로필 수정</strong>
            </a>
            <div className="acc-info">
              <div className="acc-img">
                <img
                  alt="프로필 이미지"
                  src={process.env.PUBLIC_URL + '/images/icon/testProfile.png'}
                />
              </div>
              <strong className="acc-id">mewmew</strong>
              <span className="acc-email">testID.test.com</span>
              <div className="f-counter">
                <a href="#" className="acc-counter">
                  팔로워 | <strong className="num">225</strong>
                </a>
                <a href="#" className="acc-counter">
                  팔로잉 | <strong className="num">225</strong>
                </a>
              </div>
            </div>
            <div className="acc-btn-wrap">
              <button type="button" className="basic">
                내 서제
              </button>
              <button type="button" className="basic">
                도움말
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default ComponentEx;
