import React,{useState,useEffect} from 'react'

const Fakeapicall = () => {
   const [data, setData] = useState([])
   useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
    }, []);

    
    return (
        <>
        <div>
            <ul>
               {data.map((item)=>(<li key={item.id}>{item.title}</li>))}
            </ul>
            <table border="1">
                <caption>Fake API Data</caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>(<tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
        </>
    
    )
  
}

export default Fakeapicall
