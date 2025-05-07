import React,{useState} from 'react'

export default function Toggle() {
    const [Visible, setVisible] = useState(false)
    
  
  const style = {
    backgroundColor: "lightblue",
    color: Visible ? "red" : "green", // This dynamically changes based on the 'visible' state
    padding: "10px",
    borderRadius: "8px",
  };
    const togglef = () => {
        setVisible(!Visible)
    }
  return (
    <>
      <div>toggle</div>
      <button onClick={togglef}>{Visible ? "hide" : "show"}text</button>
      <div><h1 style={style}>kannan</h1></div>
    </>
  );
}
