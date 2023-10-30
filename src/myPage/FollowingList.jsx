import React from 'react';
import ProfileList from '../components/mypage/ProfileList';

const FollowingList = () => {
  const exData = [
    {
      imgSrc: 'StackUpBooks.png',
      userName: '팔로잉 리스트 입니다용',
      userEmail: 'test@test.com',
    },
    {
      imgSrc: 'testBook.png',
      userName: '집에 있지만 집에 가고 싶습니다',
      userEmail: 'iwantgohome@test.com',
    },
    {
      imgSrc: 'icon/testProfile.png',
      userName: '저도...',
      userEmail: 'yanadoo..@test.com',
    },
    {
      imgSrc: 'StackUpBooks.png',
      userName: '팔로잉 리스트 입니다용',
      userEmail: 'test@test.com',
    },
    {
      imgSrc: 'testBook.png',
      userName: '집에 있지만 집에 가고 싶습니다',
      userEmail: 'iwantgohome@test.com',
    },
    {
      imgSrc: 'icon/testProfile.png',
      userName: '저도...',
      userEmail: 'yanadoo..@test.com',
    },
  ];
  return exData.map((e, index) => {
    return (
      <ProfileList
        key={index}
        imgSrc={e.imgSrc}
        userName={e.userName}
        userEmail={e.userEmail}
        type="remove"
      />
    );
  });
};

export default FollowingList;
