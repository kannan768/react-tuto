import React, { useContext, createContext } from "react";
import { Gi3dGlasses } from "react-icons/gi";

// Create a Context for owner information
const Context = createContext(null);

// Parent component that provides the context value
function Parent() {
  const ownerinfo = { ownername: "Kannan", ownerage: 21 };

  return (
    // Provide the ownerinfo data to all child components using Context.Provider
    <Context.Provider value={ownerinfo}>
      <div>
        <h2>Parent Component</h2>
        <Child1 />
        <Child2 />
        <Child3 />
        <Gi3dGlasses />;
      </div>
    </Context.Provider>
  );
}

// Child1 does not need to create a new Provider
function Child1() {
  return (
    <div>
      <h3>Child1</h3>
    </div>
  );
}

// Child2 consumes the context using useContext hook
function Child2() {
  const ownerinfo = useContext(Context); // Access ownerinfo from context

  return (
    <div>
      <h3>Child2</h3>
      <h1>Owner Name: {ownerinfo?.ownername}</h1>
      <h2>Owner Age: {ownerinfo?.ownerage}</h2>
    </div>
  );
}

// Child3 also consumes the same context
function Child3() {
  const ownerinfo = useContext(Context); // Access ownerinfo from context

  return (
    <div>
      <h3>Child3</h3>
      <h1>Owner Name: {ownerinfo?.ownername}</h1>
      <h2>Owner Age: {ownerinfo?.ownerage}</h2>
    </div>
  );
}

export default Parent; // Export the Parent component (now the main provider)
