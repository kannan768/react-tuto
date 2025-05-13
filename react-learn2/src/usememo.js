import React, { useState, useMemo } from 'react'

const UseMemo = () => {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)

  const expense = (num) => {
    console.log('Expensive function called')
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2
  }

  const memoizedValue = useMemo(() => expense(count), [count])

  return (
    <div>
      <h1>useMemo Example</h1>
      <h2>Count: {count}</h2>
      <h2>Memoized Value: {memoizedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h2>Number: {number}</h2>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
    </div>
  )
}

export default UseMemo
