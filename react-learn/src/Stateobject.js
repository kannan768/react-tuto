import { useState } from "react"
function Stateobject()
{
   const [user, setUser] = useState({ name: "John", age: 25 });
   const [address, setAddress] = useState({ city: "New York", country: "USA" });

    return (
      <>
        <h2>User Profile</h2>
        <p>
          Name: {user.name}, Age: {user.age}
        </p>
        <p>
          City: {address.city}, Country: {address.country}
        </p>
        <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
          Increase Age
        </button>
        <button
          onClick={() =>
            setAddress({ ...address, country: "chennai"})
          }
        >
          change city
        </button>
      </>
    );
}
export default Stateobject;