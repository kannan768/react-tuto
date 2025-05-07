import React, { useEffect, useState } from "react";

export  function Useeffect() {
    useEffect(() => {
        console.log("hello")
    }, [])
    
  return (
    <div>Useeffect</div>
  )
}
export  function StateChangeExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`✅ Count changed: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}



export  function EveryRenderExample() {
  useEffect(() => {
    console.log("🔁 Effect ran (every render)");
  });

  return <div>Runs on every render</div>;
}
