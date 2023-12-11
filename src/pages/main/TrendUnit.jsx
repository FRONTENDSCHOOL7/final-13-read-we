import React from 'react';
import styles from './css/Main.module.css';
import styled from 'styled-components';

const TrendWrap = styled.div`
  margin-bottom: 10px;
`;

const TrendTitle = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding-right: 27px;
  font-size: 12px;
  font-weight: 600;
  .icon-dot {
    filter: opacity(0.5);
  }
`;
const TrendPostLink = styled.a`
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
    <TrendWrap>
      <TrendTitle>
        &#60; {props.textTitle} &#62;
        <i className="icon icon-dot" />
      </TrendTitle>
      <TrendPostLink href={props.textlink}>Link</TrendPostLink>
    </TrendWrap>
  );
};

const ShowBtn = (props) => {
  return (
    <StyledShowBtn onClick={props.onClick}>{props.children}</StyledShowBtn>
  );
};

export { TrendUnit, ShowBtn };
