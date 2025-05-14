import React from 'react'
import Home1 from './Home1'
import Home2 from './Home2'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
export const Reactrouter = () => {
  return (
      <>
          <Router>
              <nav>
                    <ul>
                        <li>
                            <a href="/home1">Home1</a>
                        </li>
                        <li>
                            <a href="/home2">Home2</a>
                        </li>
                    </ul>
              </nav>
                <Routes>
                    <Route path='/home1' element={<Home1 />} />
                    <Route path='/home2' element={<Home2 />} />
                </Routes>
         </Router>
      </>
  )
}
