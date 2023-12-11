import React, { useState, useEffect } from 'react';
import styles from './css/Main.module.css';
import { TrendUnit, ShowBtn } from './TrendUnit';
import axios from 'axios';

const Trend = (props) => {
  const [trendCount, setTrendCount] = useState(4);
  const [showClose, setShowClose] = useState(false);
  const [count, setCount] = useState(10);
  const [start, setStart] = useState(1);
  const [trendUnits, setTrendUnits] = useState([]); //알라딘 api 검색결과

  const handleShowMore = () => {
    if (showClose) {
      setTrendCount(4); // 'Close' 버튼을 클릭하면 trendCount를 초기값인 4로 설정
    } else {
      setTrendCount(trendCount + 3); // 'Show More' 버튼을 클릭하면 trendCount를 3 증가
    }
    // 버튼을 클릭하면 showClose state를 토글
    setShowClose(!showClose);
  };

  const bestSellerFetch = async (count, start) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const aladinBSUrl = `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttb22pqpq1534001&QueryType=Bestseller&MaxResults=${count}&start=${start}&SearchTarget=Book&output=JS&Version=20131101`;
    try {
      const response = await axios.get(proxyUrl + aladinBSUrl);
      if (response.status === 200) {
        const res = response.data.item;
        setTrendUnits(res);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    const randomStart = Math.floor(Math.random() * 100) + 1;
    bestSellerFetch(7, randomStart);
  }, []);

  return (
    <div className={styles.TrendContainer}>
      <div className={styles.TrendTitle}>ReadWe Trend for you</div>
      <div className={styles.TrendUnits}>
        {/* 현재 상태에 맞게 TrendUnit을 렌더링합니다. */}
        {trendUnits.slice(0, trendCount).map((unit, index) => (
          <TrendUnit key={index} textTitle={unit.title} textlink={unit.link} />
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
