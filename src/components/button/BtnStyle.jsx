import styled, { css } from 'styled-components';

const BasicBtn = styled.button`
  width: ${(props) => props.wid || null};
  height: 80px;
  padding: 0 15px;
  background-color: ${(props) => props.bgcolor || `#000`};
  color: #fff;
  text-align: center;
  font-size: 22px;
  border-radius: ${(props) => props.round || `10px`};
  box-shadow: ${(props) =>
    props.shadow || `0px 0px 4px 0px rgba(0, 0, 0, 0.25)`};
  font-weight: ${(props) => 
    props.weight};
  ${(props) =>
    props.linestyle &&
    css`
      color: #555;
      background-color: #fff;
      border: 1px solid #d9d9d9;
    `}
  ${(props) =>
    props.xsm &&
    css`
      height: 24px;
      font-size: 12px;
    `}
  ${(props) =>
    props.sm &&
    css`
      height: 24px;
      font-size: 12px;
    `}
  ${(props) =>
    props.md &&
    css`
      height: 45px;
      font-size: 14px;
    `}
  &:disabled {
    background-color: #d3d3d3;
    color: #fff;
  }
`;

export { BasicBtn };
