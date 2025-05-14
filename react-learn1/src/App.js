import React, { useState } from 'react'
import Child from './Child';
import { Grand } from "./Head";
import { King, Queen } from './Usecontext';
import States from './States';
import { Useref,Useref1 } from './Useref';
import { Useeffect, StateChangeExample, EveryRenderExample } from "./Useeffect";
import SquareCalculator from './Usermemo';
import Parentusecallback from './Parentusecallback';
import { Hook1 } from './Hook1';
import { Hook2 } from './Hook2';
const name = "kannan";
const ownerinfo = { ownername: "kannan", ownerage: 21 };
const fruits = ["Apple", "Banana", "Cherry", "Mango"];
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
];


const alaram = () => {
  alert("welcome kannan")
}
export default function Parent() {
  const [hasPermission, sethasPermission] = useState(false);
  const toggle = () => {
    sethasPermission(!hasPermission);
  };
  return (
    <>
      <h1>welcome to parent {name}</h1>
      <Child
        name={name}
        ownerinfo={ownerinfo}
        fruits={fruits}
        users={users}
        alaram={alaram}
      />
      <h1>Dashboard</h1>
      <button onClick={toggle}>click me</button>{" "}
      {hasPermission && <p>You have admin access.</p>}
      {hasPermission ? "helloworld" : ""}
      <Grand />
      <King />
      <Queen />
      <States />
      <Useeffect />
      <StateChangeExample />
      <EveryRenderExample />
      <Useref />
      <Useref1 />
      <SquareCalculator/>
      <Parentusecallback/>
      <Hook1 />  
      <Hook2 />
    </>
  );
}


