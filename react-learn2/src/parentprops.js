import React from 'react'
import Childprops from './childprops'
const name="kannan"
const Parentprops = () => {
  return (
   <>
    <h1>Parent</h1>
    <Childprops name={name} />
   </>
  )
}

export default Parentprops;
