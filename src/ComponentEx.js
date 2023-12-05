import { BasicBtn } from './components/button/BtnStyle';
import {
  CounterBtn,
  CounterAccBtn,
  IconBtn,
} from './components/button/BtnStyleEtc';
import MainNavBtn from './components/button/MainNavBtn';
import { BasicIpt } from './components/input/IptStyle';
import { LabelIpt, IconIpt, BtnIpt } from './components/input/IptStyleEtc';
import MainProfileCard from './components/main/MainProfileCard';
import PostSection from './components/main/PostSection';
import EmptyList from './components/mypage/EmptyList';
import ProfileCard from './components/mypage/ProfileCard';
import ProfileCardOther from './components/mypage/ProfileCardOther';
import ProfileInfoSetting from './components/mypage/ProfileInfoSetting';
import ModalPopup from './components/popup/BookDetailModal';
function ComponentEx() {
  return (
    <div>
      {/*================== styled component ver ==================*/}
      <h1>styled component 변환</h1>
      <div className="ex-wrap">
        <div className="ex-content">
          <h2>button</h2>
          <BasicBtn>기본 버튼</BasicBtn>
          <p>bgcolor=(값 지정)</p>
          <BasicBtn bgcolor="#E87C3E">bgcolor-배경색깔 변경</BasicBtn>
          <p>disabled</p>
          <BasicBtn disabled>disabled 버튼</BasicBtn>
          <p>line</p>
          <BasicBtn linestyle="true">line-라인스타일로 변경</BasicBtn>
          <p>xsm</p>
          <BasicBtn xsm="true">xsm-버튼 사이즈</BasicBtn>
          <p>sm</p>
          <BasicBtn sm="true">sm-버튼 사이즈</BasicBtn>
          <p>md</p>
          <BasicBtn md="true">md-버튼 사이즈</BasicBtn>
          <p>round=(값 입력)</p>
          <BasicBtn round="100px">BtnRound-버튼 라운드 설정</BasicBtn>
          <p>shadow=none</p>
          <BasicBtn linestyle="true" shadow="none">
            shadow:none - 버튼 그림자 제거
          </BasicBtn>
          <p>wid=값입력</p>
          <BasicBtn wid="100%">width 100% 버튼</BasicBtn>
        </div>
        <div className="ex-content">
          <h2>input</h2>
          <BasicIpt placeholder="기본 인풋" />
          <p>gray</p>
          <BasicIpt gray="true" placeholder="회색 인풋" />
          <p>xsm</p>
          <BasicIpt xsm="true" placeholder="버튼 xsm" />
          <p>sm</p>
          <BasicIpt sm="true" placeholder="버튼 sm" />
          <p>md</p>
          <BasicIpt md="true" placeholder="버튼 md" />
          <p>LabelIpt</p>
          <LabelIpt>
            <BasicIpt placeholder="Label 인풋" />
            영문 소문자 또는 영문 소문자, 숫자 조합 6~12 자리
          </LabelIpt>
          <p>IconlIpt</p>
          <IconIpt>
            <BasicIpt gray="true" placeholder="아이콘 인풋" />
            <i className="icon icon-lock-w" />
          </IconIpt>
          <IconIpt>
            <BasicIpt sm="true" placeholder="검색" />
            <i className="icon icon-search" />
          </IconIpt>
          <BtnIpt>
            <BasicIpt placeholder="내용을 입력해 주세요" />
            <BasicBtn>등록</BasicBtn>
          </BtnIpt>
        </div>
        <div className="ex-content full">
          <h2>obj</h2>
          <p>type=like or comment</p>
          <div className="like-comment">
            <CounterBtn type="like" count="542" />
            <CounterBtn type="like-active" count="542" />
            <CounterBtn type="comment" count="20" />
          </div>
          <p>type=like or comment</p>
          <div className="like-comment">
            <CounterAccBtn type="팔로워" count="123" />
            <CounterAccBtn type="팔로잉" count="67" />
          </div>
          <MainNavBtn />
          <BasicBtn md="true">사진 변경</BasicBtn>
          <IconBtn>
            <i className="icon icon-setting" />
            <strong>프로필 수정</strong>
          </IconBtn>
          <BasicBtn md="true" bgcolor="#E87C3E" round="100px">
            POST
          </BasicBtn>
          <MainProfileCard
            imgSrc="icon/testProfile.png"
            userName="mewmew"
            userEmail="testID.test.com"
          />
          <PostSection
            date="2023.10.26"
            imgSrc="icon/testProfile.png"
            userName="mewmew"
            userEmail="testID.test.com"
            public="출판사 명"
            title="책 제목"
            hit="true"
            author="작가"
            content="내요요요요용"
            like="11"
            cmt=""
          />
          <ProfileCard
            imgSrc="icon/testProfile.png"
            userName="mewmew"
            userEmail="testID.test.com"
            follower="567"
            following="123"
          />
          <ProfileCardOther
            imgSrc="icon/testProfile.png"
            userName="다른사람 계정"
            userEmail="testID.test.com"
            follower="567"
            following="123"
          />
          <ProfileInfoSetting
            imgSrc="icon/testProfile.png"
            userName="mewmew"
            userEmail="testID.test.com"
          />
        </div>
        <div className="ex-content full row">
          <EmptyList
            text1="아직 독서노트가 기록되지 않았어요"
            text2="책을 읽고 기록을 남겨보세요!"
          />
        </div>
      </div>

      {/*================== 컴포넌트화 이전 ver ==================*/}
      <h1>컨포넌트 스타일 예시</h1>
      <div className="ex-wrap">
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

        {/*================== 모달 팝업 ==================*/}
        <div className="ex-content full modal-area">
          <ModalPopup
            public="출판사 명"
            title="책 제목"
            author="작가"
            content="내요요요요용"
          />
        </div>
      </div>
    </div>
  );
}

export default ComponentEx;
