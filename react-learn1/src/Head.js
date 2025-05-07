import React from 'react'

const name="kannan"
export function Grand() {
    
  return (
    <>
      <h5>Grand {name}</h5>
      <Parents name={name} />
    </>
  );
}
export  function Parents({name}) {
    return (
      <>
        <h5>parent {name}</h5>
        <Children name={name} />
      </>
    );
}
export  function Children({name}) {
  return (
    <>
          <h5>child { name}</h5>
    </>
  );
}
