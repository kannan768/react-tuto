import React, { useState } from 'react';

const UsestateHook = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(prev => prev + 1);
  };

const dec = () => {
    setCount(prev => prev - 1);
  }

  const reset = () => {
    setCount(0);
  };

  return (
    <>
    <h1>useState Hook Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default UsestateHook;
