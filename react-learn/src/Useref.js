import { useRef, useState, useEffect } from "react";

function Norender() {
  const [Counter, setcounter] = useState(0);
  const counterrf = useRef(0);

  const handle = () => {
    setcounter(Counter + 1);
    console.log("useState Counter:", Counter + 1);
  };

  const handle1 = () => {
    counterrf.current++;
    console.log("useRef Counter:", counterrf.current); // No re-render, but value increases
  };

  return (
    <div>
      <h1>useState Counter: {Counter}</h1>
      <h1>useRef Counter (Doesn't update UI): {counterrf.current}</h1>
      <button onClick={handle}>click me (useState - Triggers re-render)</button>
      <button onClick={handle1}>click me (useRef - No re-render)</button>
    </div>
  );
}


function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Focuses on the input field on mount
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
    </div>
  );
}



function PreviousState() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count; // Store previous state value
  }, [count]);

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCountRef.current}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}



const components = { Norender ,FocusInput,PreviousState};
export default components;
