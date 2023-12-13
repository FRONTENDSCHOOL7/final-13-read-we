import React, { useState, useEffect } from 'react';
import styles from './css/Main.module.css';
import { TrendUnit } from './TrendUnit';
import styled from 'styled-components';

const TrendContainer = styled.div`
  box-shadow: 0px 0px 4px 0px rgba(133, 133, 133, 0.25);
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
`;
const TrendTitle = styled.div`
  display: flex;
  box-shadow: 0px 1px 0px 0px rgba(133, 133, 133, 0.15);
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  padding: 25px 0;
  margin-bottom: 10px;
  color: #e87c3e;
`;
const TrendUnits = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  left: ${(props) => props.left}%;
  position: relative;
  transition: left 0.3s ease-in-out;
`;

const Trend = ({ trendUnits }) => {
  const [slideIndex, setSlideIndex] = useState(0); // 베스트셀러 슬라이드

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % trendUnits.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [trendUnits.length]);
  return (
    <TrendContainer>
      <TrendTitle>ReadWe 베스트셀러</TrendTitle>
      <TrendUnits left={-slideIndex * 100}>
        {/* 현재 상태에 맞게 TrendUnit을 렌더링합니다. */}
        {trendUnits.slice(0, 10).map((unit, index) => (
          <TrendUnit
            key={index}
            textTitle={unit.title}
            cover={unit.cover}
            textlink={unit.link}
            description={unit.description}
          />
        ))}
      </TrendUnits>
    </TrendContainer>
  );
};

export default Trend;
