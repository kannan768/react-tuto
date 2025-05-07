
import React, { useMemo, useState } from "react";

export default function SquareCalculator() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0)

const expensive=(number)=>{
    console.log("calculating")
let res=0;
    for(let i=0;i<10000;i++)
        res+=number*i
    return res;
}

const memeres=useMemo(()=>expensive(number),[number])

  return (
    <div>
      <h2>Expensive Result: {memeres}</h2>
      <button onClick={() => setCount(count + 1)}>
        Re-render (Count: {count})
      </button>
      <button onClick={() => setNumber(number + 1)}>
      change number {number}
      </button>
    
    </div>
  );
}
