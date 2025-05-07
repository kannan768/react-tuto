import React from 'react'
import {Link} from 'react-router-dom'
export default function Nabar() {
  return (
    <nav>
      <Link to="/">Baby1</Link>
      <Link to="/login">Login</Link>
      <Link to="/baby2">Baby2</Link>
      <Link to="/baby3">Baby3</Link>
    </nav>
  );
}
