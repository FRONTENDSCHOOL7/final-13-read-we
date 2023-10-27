import React from 'react';
import styles from './css/Main.module.css';
import { TrendUnit, ShowBtn } from './TrendUnit';

const Trend = (props) => {
  return (
    <div className={styles.TrendContainer}>
      <div className={styles.TrendTitle}>ReadWe Trend for you</div>
      <div className={styles.TrendUnits}>
        <TrendUnit
          textTitle="트렌드 코리아 2024"
          textCnt="5,123 Post"
        ></TrendUnit>
        <TrendUnit textTitle="퓨쳐 셀프" textCnt="5,123 Post"></TrendUnit>
        <TrendUnit
          textTitle="도시와 그 확실한 벽"
          textCnt="5,123 Post"
        ></TrendUnit>
        <TrendUnit
          textTitle="아침 그리고 저녁"
          textCnt="5,123 Post"
        ></TrendUnit>
        <ShowBtn></ShowBtn>
      </div>
    </div>
  );
};

export default Trend;
