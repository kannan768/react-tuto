// src/Privateroute.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function Privateroute() {
  const isLogins = useSelector((state) => state.islogin.islogin);

  return isLogins ? <Outlet /> : <Navigate to="/error"/>;
}
