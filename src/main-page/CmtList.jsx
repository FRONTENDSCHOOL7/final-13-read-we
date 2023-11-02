import React from 'react';
import CmtListItem from './CmtListItem';

const CmtList = ({ cmtList }) => {
  let items =
    cmtList.length === 0
      ? '등록된 댓글이 없습니다.'
      : cmtList.map((item) => {
          return <CmtListItem key={item.id} cmtItem={item} />;
        });

  return <ul>{items}</ul>;
};

export default CmtList;
