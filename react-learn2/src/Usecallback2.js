import React from 'react'

const Usecallback2 =React.memo(function Usecallback2({ alaram }) {
  console.log("Child rendered");
  return (
    <div>
      <button onClick={alaram}> call me </button>
    </div>
  )
})

export default Usecallback2
