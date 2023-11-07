import styled, { css } from 'styled-components';
import { BasicBtn } from './BtnStyle';

const CounterBtnStyle = styled.button`
  color: #5e5e5e;
  font-size: 14px;
  font-weight: 400;
  i {
    margin-right: 13px;
  }
`;

const CounterAccBtnStyle = styled.a`
  font-size: 18px;
  strong {
    font-weight: 700;
  }
  &:hover {
    color: #e87c3e;
  }
`;

const IconBtn = styled.a`
  font-size: 18px;
  strong {
    border-bottom: 1px solid #000;
    margin-left: 10px;
  }
`;

const CounterBtn = (props) => {
  return (
    <CounterBtnStyle onClick={props.onClick}>
      <i className={`icon icon-${props.type}`} />
      <strong>{props.count}</strong>
    </CounterBtnStyle>
  );
};

const CounterAccBtn = (props) => {
  return (
    <CounterAccBtnStyle>
      {props.type} | <strong>{props.count}</strong>
    </CounterAccBtnStyle>
  );
};

export { CounterBtn, CounterAccBtn, IconBtn };
