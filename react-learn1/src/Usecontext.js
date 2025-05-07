import React, { createContext, useContext } from 'react'

const context = createContext();
const name="kannan"
export  function King() {
  return (
    <>
      <context.Provider value={name}>
        <h1>king {name}</h1>
        <Queen />
      </context.Provider>
    </>
  );
}


export function Queen() {
    const name = useContext(context);
  return (
    <>
      <h1>queen {name}</h1>
    </>
  );
}
