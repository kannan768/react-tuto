"use client";
import Link from "next/link";
import React,{useState} from "react";
export default function dashboardlayout({ children }) {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-cyan-800">Dashboard Layout</h1>
      {children}
      <Link href="/register" className="text-blue-500 hover:underline">
        Register Us
      </Link>
      <br />
      <Link href="/login" className="text-blue-500 hover:underline">
        login Page
      </Link>
      <br />
      <button className="px-4 py-2 text-white bg-blue-500 rounded" onClick={() => setCount(count + 1)}>Login</button>
      <p>Login attempts: {count}</p>
    </div>
  );
}
