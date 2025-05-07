import React from 'react'
// import About from './About'
// import Contact from './Contact'
// import Home from './Home'

import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, BrowserRouter } from "react-router-dom";

//  const UserProfile = () => {
//    const { id } = useParams();
//    return <h2>User Profile ID: {id}</h2>;
// };
//   const Notfound = () => {
//     return <h2>Not found</h2>;
//   };
 

 
// export function Head1() {
//     const navigate = useNavigate();
//      const submit = () => {
//        navigate("/about");
//      };
//     return (
//       <div>
//           <div>
//               <div>
//                 <h1>login</h1>
//                 <button onClick={submit}>press Me</button>
//               </div>
//           </div>
//         </div>
//     );
//   }
  
// export  function Head() {
   
//   return (
//     <Router>
//       <div>
//         <nav>
//           <Link to="/about">about</Link>
//           <Link to="/">Home</Link>
//           <Link to="/Contact">Contact</Link>
//           <Link to="/user/2">user2</Link>
//           <Link to="/user/1">user1</Link>
//         </nav>
//         <Routes>
//           <Route path="/about" element={<About />} />
//           <Route path="Home" element={<Home />} />
//           <Route path="Contact" element={<Contact />} />
//           <Route path="user/:id" element={<UserProfile />} />
//           <Route path="user/:id" element={<UserProfile />} />
//           <Route path="*" element={<Notfound />} />
//           <Route />
//         </Routes>
//       </div>
//     </Router>
//   );
// }


//nested routes


