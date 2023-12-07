import styled from 'styled-components';
import { BasicIpt } from './IptStyle';
import { BasicBtn } from '../button/BtnStyle';

const LabelIpt = styled.label`
  color: #777;
  font-size: 15px;
  font-weight: 400;
  ${BasicIpt} {
    margin-bottom: 15px;
  }
`;
const IconIpt = styled.div`
  position: relative;
  ${BasicIpt} {
    padding-left: 50px !important;
  }
  i {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const BtnIpt = styled.form`
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  padding: 10px 0px;
  overflow: hidden;
  ${BasicIpt} {
    height: 100%;
    border-radius: 100px;
    border: 1px solid #000;
  }
  ${BasicBtn} {
    flex-shrink: 0;
    width: 80px;
    font-size: 18px;
    height: 100%;
  }
`;
const SearchIpt = styled.form`
  position: relative;
  width: 100%;
  height: 50px;
  ${IconIpt} {
    position: relative;
    height: 100%;
    width: 100%;
    ${BasicIpt} {
      font-size: 15px;
      padding-right: 110px !important;
      height: 100%;
      border: 1px solid #000;
    }
  }
  ${BasicBtn} {
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    font-size: 15px;
    height: 100%;
    color: #333;
    background: none;
    border-radius: 0 10px 10px 0;
    transition: all 0.3s;
    box-shadow: none;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 30px;
      background-color: #888;
    }
    &:hover {
      color: #fff;
      background-color: #000;
    }
  }
`;

export { LabelIpt, IconIpt, BtnIpt, SearchIpt };
