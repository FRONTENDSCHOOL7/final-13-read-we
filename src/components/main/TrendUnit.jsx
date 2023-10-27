import React from 'react';
import styles from './css/Main.module.css';
import styled from 'styled-components';

const TrendTitle = styled.p`
  font-size: 12px;
  font-weight: 600;
`;
const TrendPostCount = styled.p`
  font-size: 10px;
  font-weight: 600;
  color: #a7a7a7;
  margin-bottom: 30px;
`;

const StyledShowBtn = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: #e87c3e;
  margin-bottom: 25px;
`;

const TrendUnit = (props) => {
  return (
    <>
      <TrendTitle>{props.textTitle}</TrendTitle>
      <TrendPostCount>{props.textCnt}</TrendPostCount>
    </>
  );
};

const ShowBtn = () => {
  return <StyledShowBtn>Show More</StyledShowBtn>;
};

export { TrendUnit, ShowBtn };
