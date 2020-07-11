import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(1);
  const x = true;
  return (
    <>
      <button
        className={`bg-primary rounded px-2 py-1 text-white hover:bg-primary-light ${
          x && 'sm:hover:text-black'
        }`}
        onClick={() => setCount(count + 1)}
      >
        Clicked {count} times
      </button>
    </>
  );
};
