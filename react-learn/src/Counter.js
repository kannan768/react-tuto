import { useState } from "react";

function Counter()
{
    const [count,setcount]=useState(0)
    return (
      <>
        <h1>Helloeeeeee counter {count}</h1>
        <button onClick={() => setcount(count + 1)}>click me +</button>
        <button onClick={() => setcount(count > 0 ? count - 1 : 0)}>
          Decrease -
        </button>
        <button onClick={() => setcount(0)}>Reset</button>
      </>
    );
}
export default Counter