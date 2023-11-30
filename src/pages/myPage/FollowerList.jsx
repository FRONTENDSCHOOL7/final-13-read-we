import React, { useEffect, useState } from 'react';
import ProfileList from '../../components/mypage/ProfileList';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FollowerList = ({ myInfo, activeTab }) => {
  const [userAccList, setUserAccList] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = 'https://api.mandarin.weniv.co.kr';
  const token = localStorage.getItem('token');
  const myAccName = localStorage.getItem('accname');
  const navigate = useNavigate();
  const getUserAccFn = () => {
    const reqUrl = `${baseUrl}/profile/${myInfo}/${
      activeTab === 0 ? 'follower' : 'following'
    }`;
    axios
      .get(reqUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (res) {
        setUserAccList(res.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserAccFn();
  }, [activeTab]);

  return (
    <div>
      {isLoading ||
        userAccList.map((e, index) => {
          return (
            <ProfileList
              key={index}
              imgSrc={baseUrl + '/' + e.image.replace(/^.*\//, '')}
              userName={e.username}
              userAccName={e.accountname}
              userEmail={e.accountname}
              type={activeTab === 0 ? 'dot' : 'remove'}
              pageEvent={(event) => {
                localStorage.setItem('otherName', e.accountname);
                e.accountname === myAccName
                  ? navigate('/mypage')
                  : navigate('/yourpage');
              }}
            />
          );
        })}
    </div>
  );
};

export default FollowerList;
