import React, { useEffect, useState } from 'react';
import ProfileList from '../../components/mypage/ProfileList';
import { useNavigate } from 'react-router-dom';

const FollowingList = ({ myInfo }) => {
  const [followingList, setFollowingList] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = 'https://api.mandarin.weniv.co.kr';
  const accName = myInfo;
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const getFollowing = async () => {
      const reqUrl = `${baseUrl}/profile/${accName}/following`;
      const res = await fetch(reqUrl, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      const json = await res.json();
      setFollowingList(json);
      setIsLoading(false);
    };
    getFollowing();
  }, []);

  return (
    <>
      {isLoading ||
        followingList.map((e, index) => {
          return (
            <ProfileList
              key={index}
              imgSrc={baseUrl + '/' + e.image.replace(/^.*\//, '')}
              userName={e.username}
              userAccName={e.accountname}
              userEmail={e.accountname}
              type="remove"
              pageEvent={(event) => {
                localStorage.setItem('otherName', e.accountname);
                // event.preventDefault;
                navigate('/yourpage');
              }}
            />
          );
        })}
    </>
  );
};

export default FollowingList;
