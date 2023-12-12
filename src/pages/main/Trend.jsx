import React, { useState, useEffect } from 'react';
import styles from './css/Main.module.css';
import { TrendUnit, ShowBtn } from './TrendUnit';

const Trend = (props) => {
  return (
    <div className={styles.TrendContainer}>
      <div className={styles.TrendTitle}>ReadWe 베스트셀러</div>
      <div className={styles.TrendUnits}>
        {/* 현재 상태에 맞게 TrendUnit을 렌더링합니다. */}
        {props.trendUnits.slice(0, 10).map((unit, index) => (
          <TrendUnit
            key={index}
            textTitle={unit.title}
            cover={unit.cover}
            textlink={unit.link}
            description={unit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Trend;
