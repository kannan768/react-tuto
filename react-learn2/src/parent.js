import React,{createContext} from 'react'
import Child from './child'

export const context = createContext();
const name="kannan"

const Parent = () => {
  return (
    <>
 <context.Provider value={name}>
    <h1>Parent</h1>
    <Child />
 </context.Provider>
    </>
  )
}

export default Parent
