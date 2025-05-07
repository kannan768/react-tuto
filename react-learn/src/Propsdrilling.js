import React from 'react'

function Child1() {
     const ownerinfo = { ownername: "kannan", ownerage: 21 };
  return (
    <div>
      <div>Child1</div>
      <Child2 ownerinfo={ownerinfo} />
    </div>
  );
}


  function Child2({ownerinfo}) {
    return (
      <div>
        <div>Child2</div>
        <Child3 ownerinfo={ownerinfo} />
      </div>
    );
  }


function Child3({ownerinfo}) {
      const { ownername, ownerage } = ownerinfo;
      return (
        <div>
          Child3
          <h1>ownername:{ownername}</h1>
          <h1>ownerage:{ownerage}</h1>
        </div>
      );
     
  }

export default Child1;