import React, { useState, useMemo } from "react";
const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Mango",
  "Grapes",
  "Orange",
  "Peach",
];
function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);
 const [query, setQuery] = useState("");

 // Memoizing the filtered list
 const filteredItems = useMemo(() => {
   console.log("Filtering...");
   return items.filter((item) =>
     item.toLowerCase().includes(query.toLowerCase())
   );
 }, [query]);

  // Memoizing the expensive calculation
  const squaredNumber = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  return (
    <div>
      <h2>Squared Value: {squaredNumber}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>
      <button onClick={() => setNumber(number + 1)}>
        Change Number ({number})
      </button>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpensiveComponent;
