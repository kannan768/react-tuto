import React from 'react'
import { useCustomhook } from './useCustomhook'
export const Hook1 = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/'
    const { todo, loading } = useCustomhook(url);
    if (loading) {
        return <div>Loading...</div>
    }
  return (
      <>
          <ul>
                {todo.map((item,index) => (
                    <li key={index}>
                        <h1>{item.title}</h1>
                    </li>
                ))}
          </ul>
      </>
  )
}
