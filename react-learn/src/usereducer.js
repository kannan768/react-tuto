import React, { useReducer } from "react";

function reducer(state, action) {
  switch (
    action.type // Changed 'key' to 'type'
  ) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const inc = () => {
    dispatch({ type: "inc" });
  };

  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={inc}>Click Me</button>
    </>
  );
}
