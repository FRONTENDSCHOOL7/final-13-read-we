import React from 'react';

const EmptyListForME = () => {
  return (
    <>
      <img
        alt=""
        src={process.env.PUBLIC_URL + '/images/StackUpBooks.png'}
        className={'book-img'}
      />
      <p>
        아직 독서노트가 기록되지 않았어요.
        <br /> 책을 읽고 기록을 남겨보세요!
      </p>
    </>
  );
};

export default EmptyListForME;
