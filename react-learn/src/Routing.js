import React from 'react'
import Nabar from './Nabar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Baby1 from './Baby1'
import Baby2 from "./Baby2";
import Baby3 from "./Baby3";
import Error from './Error';
import Privateroute from './privateroute';
import Login from './login';
export default function Routing() {
  return (
    <BrowserRouter>
      <Nabar />
      <Routes>
        <Route path="/" element={<Baby1 />} />
        <Route path="/baby2" element={<Baby2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error" element={<Error />} />
        <Route element={<Privateroute />}>
          <Route path="/baby3" element={<Baby3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
