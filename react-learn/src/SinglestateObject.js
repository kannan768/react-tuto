import { useState } from "react";

function  Singlestate()
{
    const [state, setState] = useState({
      user: { name: "John", age: 25 },
      address: { city: "New York", country: "USA" },
    });

const updateAge = () => {
  setState((prevState) => ({
    ...prevState,
    user: { ...prevState.user, age: prevState.user.age + 1 },
    address: { ...prevState.address, city: 'CHENNAI'},
  }));
};
   
    return (
      <>
        <div>
          <h2>User Profile</h2>
          <p>
            Name: {state.user.name}, Age: {state.user.age}
          </p>
          <p>
            City: {state.address.city}, Country: {state.address.country}
          </p>
          <button onClick={updateAge}>Increase Age</button>
        </div>
      </>
    );
}
export default Singlestate;