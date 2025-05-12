import React, { useState, useMemo } from 'react';

function ExpensiveCalculator() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    const expensive = (number) => {
        console.log("calculating");
        let res = 0;
        for (let i = 0; i < 10000; i++)
            res += number * i
        return res;
    }
    const memeres = useMemo(() => expensive(number), [number])
    const handleClick = () => {
        setCount(prev => prev + 1);
    }
    return (
        <div>
            <h2>Expensive Result: {memeres}</h2>
            <button onClick={handleClick}>Re-render (Count: {count})</button>
            <button onClick={() => setNumber(number + 1)}>Change Number {number}</button>
        </div>
    )
}
export default ExpensiveCalculator;