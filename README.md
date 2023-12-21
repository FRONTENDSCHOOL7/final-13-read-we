# READ WE
1. [1차 개발(10/18 ~ 11/10)](#1-프로젝트-소개)
2. [리팩토링(11/28 ~ 12/21)](#4-리팩토링)

## 1. 프로젝트 소개

<img width="1053" alt="image" src="https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/79f3ec9c-5205-460f-9b02-263e2c26d508">
<div align="center">
<h3>READ WE! BEFRIEND BOOKS TOGETHER!</h3><br />
책과 SNS가 만나다.
READ WE는 독서기록 서비스와 SNS가 결합된 서비스로, 혼자 즐기는 취미라고 생각될 수 있는 독서를 서로 공유하고, 공유한 내용을 바탕으로 소통이 될 수 있는 공간을 제공합니다.
</div>



## 1.1 프로젝트 명: READ WE

> **🔗 배포 URL:** [READ WE](https://frontendschool7.github.io/final-13-read-we/) <br />
**🔗 테스트 계정:** book1@test.com / qwer123
```jsx
📕  독서기록 서비스와 SNS가 결합된 서비스를 제공합니다.

📗  월 별 독서 기록과 독서 잔디를 통해 객관적인 독서 통계 수치를 제공합니다.

📒  팔로우를 통해 게시물을 구경하며, 원하는 게시물에 '좋아요'를 누르거나 댓글을 등록할 수 있습니다.

📙  독서기록뿐만 아니라, 출판사, 저자 등 책의 기본 정보를 볼 수 있는 기능이 있습니다.
```

## 1.2 개발 환경

### ⚙️   사용기술 
| FrontEnd | BackEnd | Design | 협업방식 | 컨벤션 |
| :----: | :----: | :----: | :----: | :----: |
| <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/styledcomponents-CC6699?style=flat-square&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black"> | <img src="https://img.shields.io/badge/REST API-000000?style=flat-square&logo=logoColor=white"> | <img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=white"> | <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"> <img src="https://img.shields.io/badge/Notion-000000.svg?style=flat-square&logo=Notion&logoColor=white"> <img src="https://img.shields.io/badge/googledrive-000000.svg?style=flat-square&logo=googledrive&logoColor=white"> <img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=white"> | <img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat-square&logo=Prettier&logoColor=black"> <img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat-square&logo=ESLint&logoColor=white"> |
> **🔗 피그마 URL:** [READ WE Design](https://www.figma.com/file/szHcU1ud0o35WHNtJPZdC2/READ-WE!?type=design&node-id=254-5566&mode=design&t=SmAtqLMejSphHR5t-0) <br />
**🔗 구글 드라이브 URL:** [READ WE 화면 설계서](https://drive.google.com/drive/folders/1-MSgxznbuoESLSEB7Y0fgYQ0-DX0mVlZ)

# 2. 팀원 소개
|백예린|서동현|양혜진|이승미|최강우|
|---|---|---|---|---|
|![image](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/6bc1f7bc-303a-4e41-9f59-88791f808d82)|![image](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/8fa9c731-80a0-4dea-afb6-6bef222fd970)|![image](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/cd35ce2a-4692-4a79-98cd-32655d74f953)|![image](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/1a3f210b-8dd4-4470-ad3f-3769d21f7663)|![image](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/2c5435c0-0b77-44bd-899a-ea8eb33ea816)|
|<a href="https://github.com/TheVolunteers"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a>|<a href="https://github.com/dongmay98"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a>|<a href="https://github.com/yangggiri"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a>|<a href="https://github.com/seungmimi"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a>|<a href="https://github.com/obersee"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a>|
|<img src="https://img.shields.io/badge/Team member-dddddd?style=flat-square&logo=logoColor=black">|<img src="https://img.shields.io/badge/Team member-dddddd?style=flat-square&logo=logoColor=black">|<img src="https://img.shields.io/badge/Team member-dddddd?style=flat-square&logo=logoColor=black">|<img src="https://img.shields.io/badge/Team member-dddddd?style=flat-square&logo=logoColor=black">|<img src="https://img.shields.io/badge/Project Leader-000000?style=flat-square&logo=logoColor=black">

## 2-1. 기능구현 및 역할 분담

| <img src="https://img.shields.io/badge/담당자-ffffff?style=for-the-badge&logo=logoColor=black"> | 🎨 UI | ⚒️ 기능구현 | ♻️ 리펙토링 |
|---|---|---|---|
| 백예린 | - 공통 header/footer<br>- 스플래시<br>- 로그인<br>- 회원가입<br>- 채팅 | - 로그인<br>- 회원가입 |  |
| 서동현    | - 메인 페이지<br>- 책 상세정보 | - 메인 피드게시물 리스트업<br>- 유저 검색/다른 유저 프로필 페이지 이동<br>- Trend Book<br>- 책 상세정보 모달구현 | - 코드 정리<br>- fetch -> axios 비동기 통신 라이브러리 교체<br>- 외부 API추가 도입<br> :알라딘 API<br>- CORS 이슈: middleware구축<br>- 반응형 처리 |
| 양혜진 | - 프로필 수정<br>- 책 검색 모달 | - 프로필 수정 |  |
| 이승미 | - 공통컴포넌트 제작<br> :button, input, modal, 기타 공통 요소<br>- 마이페이지 / 다른사람 프로필<br>- 내 서재<br>- 팔로워/팔로잉 리스트 | - 팔로우/언팔로우<br>- 게시물 좋아요<br>- 로그아웃<br>- 게시물 작성 통계<br> :Nivo chart | - 코드 정리<br>- fetch -> axios 비동기 통신 라이브러리 교체<br>- 외부 API추가 도입<br> :알라딘 API<br>- 반응형 처리 |
| 최강우 | - 게시물 상세<br>- 게시물 등록<br>- 도서 검색 정보 페이지 | - 게시물 등록<br>- 게시물 등록 시 도서정보 조회 및 선택<br> :JSON 데이터<br>- 댓글 등록 |  |


<br />

# 3. 핵심기능 시연

| splash                                                 | 회원가입                                                             |
| ------------------------------------------------------ | -------------------------------------------------------------------- |
| ![Nov-07-2023 17-08-53](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/010e91f7-28ba-4048-9070-ac70e3b8edff) | ![Nov-07-2023 17-14-24](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/737a5fa0-957b-4a83-a9c3-60bb65316a16) |
| 로그인                                                 | 로그아웃                                                             |
| ![Nov-07-2023 17-32-29](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/63e36829-3a5b-4cfe-9eda-1b87a68bcb26) |  ![Nov-07-2023 17-33-46](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/e33951db-67a0-4fd9-a95b-1873ce6a0bb3) |
| 게시글 등록                                             | 게시글 좋아요                                                       |
| ![Nov-07-2023 17-39-21](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/1172aba5-9e29-4e44-a67d-4dd638026b83) |  ![Nov-07-2023 17-41-42](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/83ea5fbb-4172-4ada-9a86-8b1d0545792c) |
| 도서정보 보기                                         | 댓글 등록                                                       |
| ![Nov-07-2023 17-43-23](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/4083ca40-411a-47c9-9433-ccbbc4c0a4ea) | ![Nov-07-2023 17-44-50](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/b4a52684-4c36-44fd-8f70-437747654841)|
| 내정보 수정                                            | 내 서재                                                                 |
| ![Nov-07-2023 17-47-04](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/64927e54-84aa-4b76-a577-df4da18717ed) | ![Nov-07-2023 17-48-11](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/68c5e87c-b124-4333-bc53-7b307f2adef7) |
| 유저검색                                               | 팔로우                                                               |
| ![Nov-08-2023 10-17-54](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/a9d21cff-fb10-4042-9c6b-ec1cb4d7b388) | ![Nov-07-2023 17-50-22](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/507d917c-1bd1-476f-bf04-9f49925026a3) |

<br />

# 4. 리팩토링

## 4-1. 일정 및 리팩토링 리스트
![image](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/81c55afb-f561-4da7-8bec-5f82279de197)
<br />
***
###  코드정리

>1차 개발기간 동안 작성된 코드를 되돌아 보며, 작업물을 정리/분석하고 필요없는 부분을 과감하게 덜어내는 작업을 진행하였습니다.
또 한 1차 개발 기간동안에는 기능 구현이 목표였었기 때문에 해당 기간동안 놓쳤을 수 있는 코드 동작로직에 대한 고민과
사용자가 서비스를 이용하는데 불편함이 없는지 기능의 UI/UX적인 부분을 고민하고 해결을 했습니다.

<details>
<summary>폴더 정리</summary>
<div markdown="1">
  <p align="center">
    <img width="400" align="center" alt="image" src="https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/8ce4b8b7-0714-4191-81e8-aa4f74d218d7">
  </p>
  
```
1차 개발 당시 폴더구조에 대한 고민은 깊게 이루어 지지 않았습니다.
하지만 작업이 후반으로 갈수록 페이지가 늘어나고, 컴포넌트가 늘어남에 따라 폴더 구조의 필요성을 크게 느끼게 되어
리펙토링 작업의 첫번째 단계로 폴더 구조 정리를 시작하였습니다

기존 폴더 구조는 컴포넌트와 페이지단위의 jsx파일들이 규칙없이 작업자 개인의 기준으로 생성되어 있는 모습을 볼수 있습니다😅
이러한 구조를 컴포넌트 / 페이지를 담는 폴더를 따로 생성하고 각 폴더 안에는 컴포넌트의 종류, 페이지의 영역에 따라 한번더 구조를 나누고
해당 되는 파일을을 폴더 안에 배치하여 폴더 정리를 진행 하였으며,
해당 과정이서 사용되지 않는 컴포넌트와 페이지를 파악하여 삭제까지 함으로 폴더정리 과정을 마무리하였습니다.
```

</div>
</details>

<details>
<summary>axios 도입</summary>
<div markdown="1">

- API통신 시 기존에는 fetch API를 사용하였으나, 간소한 문법, 데이터를 JSON데이터 형식으로 반환 등의 장점을 고려하여 axios로 교체하기로 결정하였습니다.
  ```jsx
    //fetch API 사용
  // 회원가입 API
  const join = async (joinData) => {
    const reqUrl = 'https://api.mandarin.weniv.co.kr/user';
    const res = await fetch(reqUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(joinData),
    });
    const json = await res.json();
    console.log(json);

    // const token = json.user.token;
    // console.log(token);

    // localStorage.setItem('token', token);

    if (res.status === 200) {
      // 회원가입 성공 시 알림 메시지 표시
      alert('회원가입이 성공했습니다.');

      // 회원가입 성공 시 /join-success로 이동
      navigate('/join-success', { state: { username } }); // username을 state로 전달
    } else {
      // 회원가입 실패 시 알림 메시지 표시
      alert('회원가입에 실패했습니다. 다시 시도해 주세요.');
    }
  };
  const submitJoin = (e) => {
    const joinData = {
      user: {
        username: username,
        email: email,
        password: password,
        accountname: accountname,
      },
    };
    join(joinData);
  };
  ```

  ```jsx
    //axios 사용
    // 회원가입 API
    const joinFn = async () => {
      const reqUrl = 'https://api.mandarin.weniv.co.kr/user';
      axios
        .post(reqUrl, {
          user: {
            username: username,
            email: email,
            password: password,
            accountname: accountname,
            image: imgSrc,
          },
        })
        .then(function (res) {
          alert('회원가입이 성공했습니다.');
          // 회원가입 성공 시/join-success로 이동
          navigate('/join-success', { state: { username } });
        })
        .catch(function (error) {
          alert(error.response.data.message);
        });
    };
    const submitJoin = (e) => {
      e.preventDefault();
      joinFn();
    };
  ```
  
</div>
</details>

<details>
<summary>코드 단축 / 로직 개선</summary>
<div markdown="1">
  
- **코드 단축: 회원가입>회원정보 입력**
  ```jsx
    //변경 전
    const inputUsername = (e) => {
      setUsername(e.target.value);
    };
    const inputEmail = (e) => {
      setEmail(e.target.value);
    };
    const inputPassword = (e) => {
      setPassword (e.target.value);
    };
    const inputAccountname = (e) => {
      setAccountname(e.target.value);
    };
  ```

  ```jsx
    //변경 후
    const inputInfo = (e, inputType) => {
      inputType(e.target.value)
    };
  ```

- **코드 로직 개선: 마이페이지>포스트 정보 호출**
  - 문제: 마이페이지 접속 시 회원정보와, 게시물 정보는 문제없이 표시되지만, console에 게시물 정보를 찾을 수 없다는 오류 메시지가 표시
  - 원인: 함수의 실행 순서가 의존 배열이 없는 useEffect에서 유저정보를 불러오는 함수가 실행 -> 유저정보가 담기는 변수를 의존배열로 하는 useEffect에 유저의 포스트 정보를 불러오는 함수가 실행 하는 구조로 작성 되었으나, 화면이 랜더링 될 때 최초로 실행 하는 useEffect특성으로 유저 정보가 불러와 지기 전, 게시물 정보를 불러오는 함수가 실행 되어 오류메시지가 표시된 것으로 확인
    <p align="center">
    <img width="645" alt="image" src="https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/8dbe9a29-c133-4f01-b111-fb54a6c3b6cf">
    </p>
    
    ```jsx
    //유저작성 게시물 정보 API
    useEffect(()=>{
      const getPostFn = (accName) => {
      const reqUrl = baseUrl + `/post/${accName}/userpost`;
      axios
        .get(reqUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (res) {
          setPostList(res.data.post);
          setIsPostLoading(false);
        })
        .catch(function (error) {
          alert('게시글 리스트를 불러오지 못했습니다');
        });
    };
    getPost();
    }, [myInfo]);
  
    //유저정보 API
    useEffect(()=>{
      const getMyInfoFn = () => {
      const reqUrl = baseUrl + '/user/myinfo';
      axios
        .get(reqUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (res) {
          setMyInfo(res.data.user);
          localStorage.setItem('accname', res.data.user.accountname);
          setIsProfileLoading(false);
          //accountname -> 게시물 API함수 매변수로 전달
          getPostFn(res.data.user.accountname);
        })
        .catch(function (error) {
          alert('유저 정보를 불러오지 못했습니다');
        }
      getMyInfoFn();
    },[])    
    ```
    
  - 해결: 의존 배열이 없는 useEffect에 유저정보를 불러오는 함수 실행 후 API통신이 성공 시 유저의 포스트 정보를 불러오는 함수가 실행되도록 로직 변경
  <p align="center">
  <img width="645" alt="image" src="https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/3ae0ad71-3402-4396-9c0d-35333fe34b24">
  </p>

    ```jsx
    //유저작성 게시물 정보 API
    const getPostFn = (accName) => {
      const reqUrl = baseUrl + `/post/${accName}/userpost`;
      axios
        .get(reqUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (res) {
          setPostList(res.data.post);
          setIsPostLoading(false);
        })
        .catch(function (error) {
          alert('게시글 리스트를 불러오지 못했습니다');
        });
    };
    //유저정보 API
    const getMyInfoFn = () => {
      const reqUrl = baseUrl + '/user/myinfo';
      axios
        .get(reqUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (res) {
          setMyInfo(res.data.user);
          localStorage.setItem('accname', res.data.user.accountname);
          setIsProfileLoading(false);
          //accountname -> 게시물 API함수 매변수로 전달
          getPostFn(res.data.user.accountname);
        })
        .catch(function (error) {
          alert('유저 정보를 불러오지 못했습니다');
        });
    };
    //화면이 로드될 때 유저정보 및 게시물 API 실행
    useEffect(() => {
      getMyInfoFn();
    }, []);
    ```
  
</div>
</details>

<details>
<summary>UI/UX 개선</summary>
<div markdown="1">

- **UI/UX 개선 -1**
    <p align="center">
      <img width="874" alt="image" src="https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/7adaed7f-807a-4f29-b323-7d0fbbf16665">
    </p>

    ```
    게시물 등록 화면의 경우 기능상의 문제는 없었으나, 요소들 사이의 여백, 직접 입력이 불가능한 input이지만 입력이 활성화 되는 등
    사용자가 서비스를 이용하면서 어색하게 느껴질 수 있는 UI요소들을 수정하였습니다.
    또 한 게시물 상세에는 별점 정보가 있으나, 막상 게시물을 등록할 때는 별점을 등록할 수 있는 요소가 없어 해당 요소를 추가하며 전체적인
    UI를 다듬었습니다.
    ```
- **UI/UX 개선 -2**
  <p align="center">
      <img width="874" alt="image" src="https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/2298848b-0488-47b7-9409-676cdb9400d6">
    </p>

    ```
    회원정보에서 닉네임 정보는 20자 미만으로 작성되어야 하는 규칙이 있습니다.
    기존코드는 닉네임을 변경 할 때 위 규칙에 따라 20자 이상 작성이 되지 않도록 막고 있으나, 별다른 안내가 없어
    사용자는 해당 현상이 닉네임이 20자 미만으로 작성해야하는 규칙이 있는지, 오류인지 잘 인지할 수 없습니다.
    사용자의 UX개선을 위해 20자 초과 작성 시 사용자에게 안내가 될 수 있도록 안내문구를 표시하는 기능을 추가하였습니다.
    ```

    ```jsx
    //안내문구 추가 전
    const handleNicknameChange = (e) => {
      if(e.targt.value.length > 20){
        return;
      }
      setNicknameChange(e.target.value);
    }
    ```

    ```jsx
    //안내문구 추가
    const handleNicknameChange = (e) => {
      if(e.targt.value.length > 20){
        setUserNameAlert('⛔️ 닉네임은 20자 미만으로 작성이 가능합니다.')
        return;
      }
      setNicknameChange(e.target.value);
    }
    ```

</div>
</details>

<br />

### 알라딘 API 도입

>자신이 읽을 책을 등록하고, 독후감을 쓰는 서비스를 제공하는 Read we에서는 대량의 책정보가 필요했고, 해결 방안으로는 책정보를 재공하는 외부API사용을 생각했습니다.
>
>그러나, 1차 개발 당시 목표로했던 완성기간 내 외부 API를 사용하는 것은 어렵다고 판단 되었습니다. 임시방편으로 내부에 책데이터를 담은 json파일을 추가하여 해당 json데이터를 기반으로 책검색 기능을 구현하였으나, json데이터로는 목표했던 서비스를 완성하는데 많은 부족함이 있었습니다.
>
>이런한 의미에서 책 정보를 제공받을 수 있는 API를 추가하는 것은 리펙토링 항목 중 가장 필수적으로 진행되어야 하는 파트였습니다. 다양한 책관련 API를 비교해본 후 알라딘 API를 선정 후 서비스에 도입을 하였습니다.

<details>
<summary>JSON데이터 -> 알라딘API 교체</summary>
<div markdown="1">
  내용내용내용

  [CORS이슈 해결 상세보기](#cors이슈)
  
</div>
</details>

<details>
<summary>무한 스크롤링 구현</summary>
<div markdown="1">

- 무한스크롤의 필요성
  ```
  - 검색 시 한번에 너무많은 검색결과를 보여줄 경우 검색 후 결과 표시까지 많은시간이 소요될 수 있음
  - 알라딘 API는 도서검색 시 최대 검색결과 개수가 정해져 있어 최대검색 수량 이후에 존재하는 검색 결과가 화면에 보여지지 않을 수 있음
  ```
  
- 무한스크롤 구현
  ```
  구현 방향
  
  1️⃣ 스크롤이 영역의 바닥에 닿으면
  2️⃣ API 재호출, 이 때 검색 결과 이후 페이지의 검색 내용을 불러오도록 설정
  ```

  0️⃣ 필요 변수 생성
  ```jsx
  //스크롤이 바닥에 닿았는지 여부 상태저장
  const [isBottom, setIsBottom] = useState(false);
  //검색결과 페이지 상태 저장
  const [pageToFetch, setpageToFetch] = useState(1);
  //로딩여부 상태 저장
  const [isLoading, setIsLoading] = useState(false);
  ```
  
  1️⃣ 스크롤이 바닥에 닿았는지 상태를 확인하는 함수 구현
  ```jsx
  function isBottomFn(e) {
    if (
      e.target.scrollTop + e.target.offsetHeight >=
      e.target.children[0].offsetHeight
    ) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  }
  ```
  
  2️⃣ 스크롤이 바닥에 닿을 을때 다음 페이지가 검색 되도록 페이지+1 처리
  ```jsx
  useEffect(() => {
    if (isBottom) {
      setpageToFetch((prevPage) => {
        return prevPage + 1;
      });
    }
  }, [isBottom]);
  ```

  3️⃣ 페이지 넘버가 변경 되었을 때 책검색 API를 재호출
  (로딩이 아닌 경우에만 API를 호출하도록 설정)
  ```jsx
  useEffect(() => {
    if (!isLoading) {
      //(조회할 검색 결과 수, 조회할 페이지, 검색타입(최초검색/스크롤을 통한 추가검색 케이스 구분용)
      fetchBook(30, pageToFetch, 'scroll');
    }
  }, [pageToFetch]);
  ```

  ```jsx
  //알라딘 책검색 API
  const fetchBook = async (count, start, eventType) => {
    if (bookName === '') return;
    setIsLoading(true);
    try {
      const response = await axios.get(
        `{middlewear}/search?bookName=${bookName}&count=${count}&start=${start}`,
      );
      if (response.status === 200) {
        setIsLoading(false);
        const res = response.data.item;
        //eventType: 최초 도서검색(search), 검색결과스크롤(scroll)케이스 구분용
        if (eventType === 'search') {
          if (response.data.item.length === 0) {
            setNoResults(true);
            return;
          }
          setSearchResults(res);
          setNoResults(false);
          return;
        }
        setSearchResults(searchResults.concat(res));
        setNoResults(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching data: ', error);
    }
  };
  ```
- 구현 결과
  
  ![무한스크롤](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/e7520ba6-b150-4998-90aa-25240c307a15)



</div>
</details>

<br />

### 반응형

>Read We 서비스는 pc해상도를 기반으로 기획-개발이 진행 되었으며, 화면의 너비가 800px정도만 되어도 UI들이 어긋나고 깨져보이는 문제가 있었습니다. 이러한 문제를 해결하고자 반응형 처리를 진행 하였고, pc/tablet/mobile 등 다양한 환경에서 서비스가 잘 보여지도록 하는것을 목표로 하였습니다.

```
작업 시 고려하는 최소너비는 375px로 설정하여 작업하였습니다.
```
- 주요화면 반응형 처리 결과

메인화면|게시물등록
---|---|
![메인_반응형](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/247c016b-970f-41e0-b972-f562224c53e6)|![게시물등록_반응형](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/fe8dfd6d-d60e-4923-bd04-cec6f7dcd44a)|
마이페이지|내 서재
![마이페이지_반응형](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/321a4d29-0ebb-4aca-a2d6-33ce5d1d12be)|![내서재_반응형](https://github.com/FRONTENDSCHOOL7/final-13-read-we/assets/138555225/43a7e0e4-8f26-434b-a597-708b4117fcea)|


## 4-2. 트러블슈팅
### CORS이슈

