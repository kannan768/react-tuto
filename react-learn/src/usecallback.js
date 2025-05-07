import React, { useCallback, useState } from "react";
import Child from "./childusememo";
// Memoized Child component
// const Child = React.memo(({ onSayHello }) => {
//   console.log("Child rendered");

//   return (
//     <div>
//       <h3>Child Component</h3>
//       <button onClick={() => alert(onSayHello())}>Say Hello</button>
//     </div>
//   );
// });rr

function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);


  const hello = useCallback(() => {
    console.log("Callback called");
    return `Count doubled is ${other * 2}`;
  }, [other]);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOther(other + 1)}>Change Other State</button>
      <Child onSayHello={hello} />
    </>
  );
}

export default UseCallbackExample;
