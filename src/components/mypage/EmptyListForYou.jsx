import React from 'react';

const EmptyListForYou = () => {
  return (
    <>
      <img
        alt=""
        src={process.env.PUBLIC_URL + '/images/StackUpBooks.png'}
        className={'book-img'}
      />
      <p>아직 기록된 독서노트가 없어요.</p>
    </>
  );
};

export default EmptyListForYou;
