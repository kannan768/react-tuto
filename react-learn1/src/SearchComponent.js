import React, { useState } from "react";
import { startTransition } from "react";

export default function SearchComponent() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value); // Update input immediately

    // Defer heavy filtering as a transition
    startTransition(() => {
      const filtered = bigList.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Search List</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Simulate a large dataset
const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
