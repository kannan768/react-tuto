import React from 'react'
import { Useform } from './Useform'

const Hookform = () => {
    const { value, handleChange, resetForm } = Useform({
        name: "",
        email: "",
        password: "",
    });
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(value);
    }
  return (
      <>
            <form onSubmit={handlesubmit}>
                <input type="text" name='name' value={value.name} onChange={handleChange} />
                <input type="email" name='email' value={value.email} onChange={handleChange} />
                <input type="password" name='password' value={value.password} onChange={handleChange} />
                <button type='button' onClick={resetForm}>Reset</button>
                <button type='submit'>Submit</button>
          </form>
          <h1>{value.name}</h1>
          <h1>{value.email}</h1>
            <h1>{value.password}</h1>
      </>
  )
}
export default Hookform;