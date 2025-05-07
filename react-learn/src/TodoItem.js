import React, { useState } from 'react'

export default function TodoItem() {
    const [data, setData] = useState([]);
    const [input, setinput] = useState("");
    const handleinput = (e) => {
        setinput(e.target.value)
    }
    const addvalue = () => {
        if(input.trim())
        {
            setData([...data,{id:Date.now(),task:input,completed:false}]);
           setinput("")
        }
    }
    const deleteinput = (id) => {
     setData(data.filter(item=>item.id!==id))   
    }
      const toggleCompletion = (id) => {
        setData(
          data.map(
            (item) =>
              item.id === id ? { ...item, completed: !item.completed } : item // Toggle completed status
          )
        );
      };
  return (
    <>
          <div>TodoItem</div>
          <input type='text' value={input} onChange={handleinput} placeholder='enter a task' />
          <button type="submit" onClick={addvalue}>add item</button>

          <h1><ul>{data.map((item) => {
              return (
                  <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                  <span onClick={() => toggleCompletion(item.id)}>
                    {item.task}
                  </span>
                  <button type="submut" onClick={() => deleteinput(item.id)}>
                    delete
                  </button>
                </li>
              );
          })}</ul></h1>
    </>
  );
}
