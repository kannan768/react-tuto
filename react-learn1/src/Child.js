import React from 'react'

export default function Child({ name, ownerinfo, fruits, users, alaram }) {
  return (
    <>
      <h1>child componet:calling from parent {name}</h1>
      <h1>
        child componet:calling from parent {ownerinfo.ownername}
        {ownerinfo.ownerage}
      </h1>
      <h1>List and keys in array</h1>
      <h1>
        {" "}
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </h1>
      <h1>multiple object</h1>
      <h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id}
              {user.name}
              {user.age}
            </li>
          ))}
        </ul>
          </h1>
          <h1><button onClick={alaram}>click me altert from parent</button></h1>
          
    </>
  );
}
