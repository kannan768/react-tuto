import React, { useEffect, useState } from "react";

export default function Fakeapi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.table(data); // You can monitor updated data here

  return (
    <>
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.key}>
              {item.key}
              {item.price}
              {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>${item.price}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
