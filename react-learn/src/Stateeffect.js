import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
   
    return () => clearInterval(interval); // Cleanup function
  }, []); // Runs once on mount

  return <h2>Timer: {seconds}s</h2>;
};

export default Timer;
