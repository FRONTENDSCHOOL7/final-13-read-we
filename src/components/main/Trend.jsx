import React, { useState } from 'react';
import styles from './css/Main.module.css';
import { TrendUnit, ShowBtn } from './TrendUnit';

const Trend = (props) => {
  const [trendCount, setTrendCount] = useState(4);
  const [showClose, setShowClose] = useState(false);

  const handleShowMore = () => {
    if (showClose) {
      setTrendCount(4); // 'Close' 버튼을 클릭하면 trendCount를 초기값인 4로 설정
    } else {
      setTrendCount(trendCount + 3); // 'Show More' 버튼을 클릭하면 trendCount를 3 증가
    }
    // 버튼을 클릭하면 showClose state를 토글
    setShowClose(!showClose);
  };

  const trendUnits = [
    { title: '트렌드 코리아 2024', count: '5,123 Post' },
    { title: '퓨쳐 셀프', count: '1,915 Post' },
    { title: '도시와 그 확실한 벽', count: '513 Post' },
    { title: '아침 그리고 저녁', count: '1,645 Post' },
    { title: '자바스크립트 딥다이브', count: '7,777 Post' },
    { title: '코어 자바스크립트', count: '6,458 Post' },
    { title: '알잘딱깔센 : 자바스크립트 비동기', count: '3,946 Post' },
  ];
  return (
    <div className={styles.TrendContainer}>
      <div className={styles.TrendTitle}>ReadWe Trend for you</div>
      <div className={styles.TrendUnits}>
        {/* 현재 상태에 맞게 TrendUnit을 렌더링합니다. */}
        {trendUnits.slice(0, trendCount).map((unit, index) => (
          <TrendUnit key={index} textTitle={unit.title} textCnt={unit.count} />
        ))}
        {/* ShowBtn 클릭 시 handleShowMore 함수를 실행합니다. */}
        <ShowBtn onClick={handleShowMore}>
          {showClose ? 'Close' : 'Show'}
        </ShowBtn>
      </div>
    </div>
  );
};

export default Trend;
