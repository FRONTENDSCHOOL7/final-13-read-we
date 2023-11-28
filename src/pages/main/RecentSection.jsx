import React from 'react';
import styled from 'styled-components';

const RecentTitle = styled.p`
  font-size: 12px;
  font-weight: 700;
  padding: 12px 0 0 17px;
`;

const clearButton = styled.button`
  font-size: 10px;
  font-weight: 600;
  color: e87c3e;
  padding: 13px 16px 0 0;
  text: 'clear all';
`;

const recentResult = styled.p`
  font-size: 10px;
  font-weight: 500;
  padding: 10px 106px 5px 0;
`;

const Recent = (props) => {
  return (
    <>
      <RecentTitle>Recent</RecentTitle>
      <clearButton></clearButton>
      <recentResult></recentResult>
    </>
  );
};

export default Recent;
