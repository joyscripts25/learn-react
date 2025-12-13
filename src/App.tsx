import { useState } from 'react';
import { sculptureList } from './data.ts';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasPrev = index > 0;
  const hasNext = index < sculptureList.length - 1;

  function handlePrevClick() {
    if (hasPrev) { // 클로저: 부모 함수에서 선언한 변수를 사용한다.
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) { // 클로저: 부모 함수에서 선언한 변수를 사용한다.
      setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Prev
      </button>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
