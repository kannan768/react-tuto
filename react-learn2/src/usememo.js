import React, { useState, useMemo } from 'react';

function UseMemoExample() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    // Expensive calculation function
    const expensiveCalculation = (num) => {
        console.log('Calculating...');
        for (let i = 0; i < 1000000000; i++) {} // Simulate heavy computation
        return num * 2;
    };

    // Memoized value
    const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <div>
            <h1>useMemo Example</h1>
            <div>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
                <p>Count: {count}</p>
                <p>Memoized Value: {memoizedValue}</p>
            </div>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type something"
                />
                <p>Input Value: {inputValue}</p>
            </div>
        </div>
    );
}

export default UseMemoExample;