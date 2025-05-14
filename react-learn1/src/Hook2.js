import React from 'react'
import { useCustomhook } from './useCustomhook'
export const Hook2 = () => {
    const url = "https://fakestoreapi.com/products/";
    const { todo, loading } = useCustomhook(url);
    if (loading) {
        return <div>Loading...</div>
    }
  return (
    <>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
        <h1>{item.title}</h1>
          </li>
        ))}
      </ul>
    </>
  );
}
