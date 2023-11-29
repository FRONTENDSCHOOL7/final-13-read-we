import styled, { css } from 'styled-components';

const BasicIpt = styled.input`
  width: ${(props) => props.wid || `100%`};
  padding: 30px 24px;
  background-color: ${(props) => props.bgColor || `#fff`};
  box-shadow: ${(props) =>
    props.shadow || `0px 0px 4px 0px rgba(133, 133, 133, 0.25)`};
  border-radius: 10px;
  font-size: 18px;
  color: #000;

  ${(props) =>
    props.gray &&
    css`
      background-color: rgba(167, 167, 167, 0.5);
      border: none;
      &::placeholder {
        color: #ffffff;
      }
    `}
  ${(props) =>
    props.xsm &&
    css`
      height: 24px;
      font-size: 12px;
      padding: 5px 12px;
    `}
  ${(props) =>
    props.sm &&
    css`
      height: 34px;
      font-size: 12px;
      padding: 5px 12px;
    `}
  ${(props) =>
    props.md &&
    css`
      height: 45px;
    `}
  &:disabled {
    background-color: #d3d3d3;
    color: #fff;
  }
  &:focus {
    border: none;
    outline: 1px solid #000;
  }
  &::placeholder {
    color: ${(props) =>
      props.gray || `0px 0px 4px 0px rgba(133, 133, 133, 0.25)`};
  }
`;

export { BasicIpt };
