
import React, { useEffect, useState } from 'react'

export default function Test1() {
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/").then((res) => res.json()).then((data) => setData(data)).catch((error) => console.log('error', error))
    }, [])
    console.log("data", data);

   const toggle = () => {
     setVisible(!visible);
   };

   const style = {
     color: visible ? "red" : "blue",
   };
    return (
      <>
        <div>
          <button type="button" onClick={toggle}>
            {visible ? "hide" : "show"} click me
          </button>
                <h5 style={style}>kannan</h5>
                <h6>{ visible?<h6>kannan</h6>:<h2>divi</h2>}</h6>
        </div>
        <div>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {item.id} {item.description}
                {item.price}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
}
