import React,{useContext} from 'react'
import {context} from './parent'
const Child = () => {

    const person=useContext(context)
  return (
    <div>
        <h1>Child</h1>
        <h1>{person}</h1>
    </div>
  )
}

export default Child
