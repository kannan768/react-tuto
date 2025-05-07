import React, { useState } from 'react'

export default function Test2() {
    const [data, setData] = useState([]);
    const [input, setinput] = useState({
        name: '',
        email:''
    });
    const handleinput = (e) => {
        const {name,value}=e.target
         setinput({
      ...input,
      [name]: value
    });
    }
    const submitvalue = (e) => {
      e.preventDefault(); // Prevent page refresh
      const { name, email } = input;
      if (name && email) {
        setData([...data, { id: Date.now(), name, email, completed: false }]);
        setinput({ name: "", email: "" });
      } else {
        alert("give me correct name and email");
      }
    }
    const deletetext=(id) => {
    setData(data.filter((item)=>item.id!==id))
    }
    const Toggle = (id) => {
          setData(
            data.map(
              (item) =>
                item.id === id ? { ...item, completed: !item.completed } : item // Toggle completed status
            )
          );
    }
    const reset = () => {
         setinput({ name: "", email: "" });
   }
  return (
    <>
      <div>Todo</div>
      <button type="submit" onClick={reset}>
        {" "}
        clear
      </button>
      <form onSubmit={submitvalue}>
        <div>
          name
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleinput}
          />
          email
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={handleinput}
          />
          <button type="submit">add</button>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <span
                  onClick={() => Toggle(item.id)}
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                    cursor: "pointer",
                  }}
                >
                  Name:{item.name} Email:{item.email} status:{item.completed ? "✅" : "⬜"}
                </span>
                <button onClick={() => deletetext(item.id)}>delete</button>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </>
  );
}
