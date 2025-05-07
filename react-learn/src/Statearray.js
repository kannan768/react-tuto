import { useState } from "react";

function Arraystate()
{
    const [items, setItems] = useState(["item1"]);
      const addItem = () => {
        setItems([...items, `item${items.length + 1}`]);
        
      };
    return (
      <>
        <h2> List</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={addItem}>click me </button>
      </>
    );
}

export default Arraystate