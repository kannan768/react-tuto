import React from "react";
import { useDispatch } from "react-redux";
import { setuser } from "./Slice/Islogin";
import { useNavigate } from "react-router-dom";
import {removeuser} from "./Slice/Islogin"
export default function Login() {
  const dispatch = useDispatch();
    const Navigate = useNavigate();
  const login = () => {
    dispatch(
      setuser({
        user: "kannan",
      })
    );
    Navigate("/baby3"); 
    };
    const logout = () => {
        dispatch(removeuser());
    }

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </>
  );
}
