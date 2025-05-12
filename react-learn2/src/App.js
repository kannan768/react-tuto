import React from 'react'
import UsestateHook from './UsestateHook'
import {Useeffect,StateChangeExample, EveryRenderExample} from './useeffecthook'
import Parent from './parent'
import Usecallback from './Usecallback'
import ExpensiveCalculator from './usememo'
import Parentprops from './parentprops'
const App = () => {
  return (
   <>
   <UsestateHook />
    <Useeffect />
    <StateChangeExample />
    <EveryRenderExample />
    <Parent />
    <Usecallback />
    <ExpensiveCalculator />
    <Parentprops />
   </>
  )
}

export default App
