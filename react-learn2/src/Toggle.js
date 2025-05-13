import React,{useState} from 'react'

const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false)
    const handleToggle = () => {
        setIsToggled(!isToggled)
    }   
  return (
   <>
    <h1>Toggle Example</h1>
    <button onClick={handleToggle}>
        {isToggled ? 'ON' : 'OFF'}
    </button>
    {isToggled && <p>The toggle is ON!</p>}
    {!isToggled && <p>The toggle is OFF!</p>}
   </>
  )
}

export default Toggle
