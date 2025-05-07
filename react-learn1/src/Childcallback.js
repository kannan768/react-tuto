import React from 'react'

const Childcallback = React.memo(function Childcallback({ value }) {
  console.log("Child rendered"); // Check if it re-renders
  return <button onClick={value}> call me </button>;
});

export default Childcallback;