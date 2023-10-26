import React from 'react';
// 메인 우측 책검색창
const MainSearchBookIpt = () => {
  return (
    <div className="input-icon">
      <i className="icon icon-search"></i>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        className="basic sm"
      />
    </div>
  );
};

export default MainSearchBookIpt;
