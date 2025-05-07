import React, { useState ,useCallback} from "react";
import Childcallback from './Childcallback'
export default function Parentusecallback() {
    const [count, setcount] = useState(0)
    const alaram = useCallback(() => {
      console.log("alter");
      alert("calling...");
    },[]);
  return (
    <>
      {count}
      <button onClick={() => setcount(count + 1)}>click me</button>
      <Childcallback value={alaram} />
    </>
  );
}
