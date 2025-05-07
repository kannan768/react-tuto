import React, { useRef, useState } from "react";

export  function Useref() {
    const inputref = useRef(null)
    
    const toggle = () => {
        inputref.current.focus();
    }
  return (
    <>
      <input type="text" ref={inputref} placeholder="type the name"></input>
      <button onClick={toggle}>Focus Input</button>
    </>
  );
}


export function Useref1() {
  const [count, setCount] = useState(0)
  const prev = useRef();

  const store = () => {
    prev.current = count;
  };

  const inc = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <h2>Current Count: {count}</h2>
      <h2>Previous Count: {prev.current}</h2>
      <button onClick={inc}>Increment</button>
      <button onClick={store}>Store Previous</button>
    </>
  );
}