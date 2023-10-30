import React from 'react';
import ProfileList from '../components/mypage/ProfileList';

const FollowerList = () => {
  const exData = [
    {
      imgSrc: 'icon/testProfile.png',
      userName: '팔로워 리스트 입니다용',
      userEmail: 'test@test.com',
    },
    {
      imgSrc: 'StackUpBooks.png',
      userName: '집에 있지만 집에 가고 싶습니다',
      userEmail: 'iwantgohome@test.com',
    },
    {
      imgSrc: 'testBook.png',
      userName: '저도...',
      userEmail: 'yanadoo..@test.com',
    },
    {
      imgSrc: 'icon/testProfile.png',
      userName: '팔로워 리스트 입니다용',
      userEmail: 'test@test.com',
    },
  ];

  return exData.map((e, index) => {
    return (
      <ProfileList
        key={index}
        imgSrc={e.imgSrc}
        userName={e.userName}
        userEmail={e.userEmail}
        type="dot"
      />
    );
  });
};

export default FollowerList;
