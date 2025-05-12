import React,{useCallback, useState} from 'react'
import Usecallback2 from './Usecallback2';
const Usecallback = () => {
    const [count, setCount] = useState(0);    
    const alaram = useCallback(() => {
      console.log("alter");
      alert("calling...");
    },[]);
    const handleClick = () => {
      setCount(prev=> prev + 1);
    }
  return (
    <div>
      <h5>useCallback</h5>
        <h1>{count}</h1>
        <button onClick={handleClick}>click me</button>
        <Usecallback2 alaram={alaram} />
    </div>
  )
}

export default Usecallback
