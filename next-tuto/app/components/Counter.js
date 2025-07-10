"use client";

import { useState } from "react";

export default function Counter({ user }) {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginTop: "20px" }}>
      <h1>Welcome, {user.name}!</h1>
      <h1>Age: {user.age}</h1>
      <h1>Hobbies: {user.hobbies.join(", ")}</h1>
      <h2>Client Counter</h2>
      <h1>Clicked: {count} times</h1>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
    </div>
  );
}
