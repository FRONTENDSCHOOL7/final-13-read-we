import React from 'react';
import styles from './css/Main.module.css';
import styled from 'styled-components';

const TrendWrap = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TrendTitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  .icon-dot {
    filter: opacity(0.5);
  }
`;
const TrendDescrip = styled.p`
  font-size: 12px;
  font-weight: 550;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 8px;
  margin-top: 10px;
`;
const TrendPostLink = styled.a`
  font-size: 10px;
  font-weight: 600;
  color: #a7a7a7;
  margin-bottom: 15px;
  display: block;
  text-align: center;
`;

const StyledShowBtn = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: #e87c3e;
  margin-bottom: 25px;
`;

const StyledCover = styled.img`
  width: 60%;
  text-align: center;
`;
const TrendUnit = (props) => {
  return (
    <TrendWrap>
      <TrendPostLink href={props.textlink}>
        <StyledCover src={props.cover} alt="책 이미지" />
      </TrendPostLink>
      <TrendTitle>{props.textTitle}</TrendTitle>
      <TrendDescrip>{props.description}</TrendDescrip>
    </TrendWrap>
  );
};

const ShowBtn = (props) => {
  return (
    <StyledShowBtn onClick={props.onClick}>{props.children}</StyledShowBtn>
  );
};

export { TrendUnit, ShowBtn };
