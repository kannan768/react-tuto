import Cat from "./cat";
import Puppy from "./puppy";
import './Header.css';
import styles from './Header.module.css'
function Dog()
{
    const doginfo = { breed: "germanshepard", color: "red", age: 20 }
    // const doginfo = {  };
    const ownerinfo = { ownername: "kannan", ownerage: 21 }
    const ishow = ownerinfo.ownername !== undefined && ownerinfo.ownerage !== undefined
    const ishow1 = doginfo.breed !== undefined && doginfo.color !== undefined
    const fruits = ["Apple", "Banana", "Cherry", "Mango"];
      const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
    ];
     const myStyling = {
       color: "red",
       fontSize: "24px",
       fontWeight: "bold",
       backgroundColor: "lightgray",
       padding: "10px",
       borderRadius: "5px",
     };
    return (
      <>
        <h1 className={styles.h1}>hello DOG</h1>
        <h1 style={myStyling}>hello all kannan</h1>
        {ishow1 ? <Puppy doginfo={doginfo}/> : <h1>no data</h1>}
        {ishow && <Cat ownerinfo={ownerinfo} />} {/* visible or not */}
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li> // Always use a unique key
          ))}
        </ul>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age} years old
            </li>
          ))}
            </ul>
            
      </>
    );
}
export default Dog;