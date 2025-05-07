import React from "react";

const Child = React.memo(({ onSayHello }) => {
  console.log("Child rendered");

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={() => alert(onSayHello())}>Say Hello</button>
    </div>
  );
});

export default Child;
