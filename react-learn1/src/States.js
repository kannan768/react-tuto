import React, { useState } from "react";

export default function States() {
   const [count, setCount] = useState(0)
   const inc=()=>{
    setCount(count=>count+1)
   }
  return (
      <>
      {count}
      <button onClick={inc}>click me</button> 
      </>
  )
}