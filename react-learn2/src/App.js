import React from 'react'
import UsestateHook from './UsestateHook'
import {Useeffect,StateChangeExample, EveryRenderExample} from './useeffecthook'
import Parent from './parent'
import Usecallback from './Usecallback'
const App = () => {
  return (
   <>
   <UsestateHook />
    <Useeffect />
    <StateChangeExample />
    <EveryRenderExample />
    <Parent />
    <Usecallback />
   </>
  )
}

export default App
