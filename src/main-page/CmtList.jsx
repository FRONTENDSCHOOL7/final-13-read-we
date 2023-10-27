import React from 'react';
import CmtListItem from './CmtListItem';

const CmtList = ({ cmtList }) => {
  let items = cmtList.map((item) => {
    return <CmtListItem key={new Date()} cmtItem={item} />;
  });

  return <ul>{items}</ul>;
};

export default CmtList;
