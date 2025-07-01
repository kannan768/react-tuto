import React, { useEffect, useState } from 'react'

const Test = () => {
        const [data,Setvalue]=useState([]);
        useEffect(()=>{
             fetch("https://dummyjson.com/users").then(res=>res.json()).then(data=>Setvalue(data.users)).catch(err=>console.log(err));

        },[])
                   
  return (
    <>
   <ul>
    {data.map((item)=><li key={item.id}>{item.firstName}{item.lastName}{item.address.city}</li>)}
   </ul>
    </>
  )
}

export default Test
