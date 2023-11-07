import React from 'react';
import styled from 'styled-components';

const EmptyListStyle = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 65px;
  align-items: center;
  justify-content: center;
  img {
    max-width: 245px;
  }
  p {
    text-align: center;
    color: #a7a7a7;
    font-size: 18px;
    font-weight: 400;
  }
`;

const EmptyList = (props) => {
  return (
    <EmptyListStyle>
      <img
        alt=""
        src={process.env.PUBLIC_URL + '/images/StackUpBooks.png'}
        className={'book-img'}
      />
      <p>
        {props.text1}
        <br />
        {props.text2}
      </p>
    </EmptyListStyle>
  );
};

export default EmptyList;
