import React from 'react'
import UsestateHook from './UsestateHook'
import {Useeffect,StateChangeExample, EveryRenderExample} from './useeffecthook'
import Parent from './parent'
import Usecallback from './Usecallback'
import Parentprops from './parentprops'
import UseMemo from './usememo'
import Userefhook from './Userefhook'
import Userefhook1 from './Userefhook1'
const App = () => {
  return (
   <>
   <UsestateHook />
    <Useeffect />
    <StateChangeExample />
    <EveryRenderExample />
    <Parent />
    <Usecallback />
    <Parentprops />
    <UseMemo/>
    <Userefhook />
    <Userefhook1 />
   </>
  )
}

export default App
