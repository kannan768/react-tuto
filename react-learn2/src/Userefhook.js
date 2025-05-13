import React,{useRef} from 'react'

const Userefhook = () => {
const inputRef = useRef(null)
const focusInput = () => {
  inputRef.current.focus()  
}
const clearInput = () => {
    inputRef.current.value = ''
}
  return (
  <>
    <h1>useRef Hook Example</h1>
    <input type="text" ref={inputRef} />
    <button onClick={focusInput}>Focus Input</button>
    <button onClick={clearInput}>Clear Input</button>   
  </>
  )
}

export default Userefhook
