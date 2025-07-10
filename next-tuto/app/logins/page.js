"use client";

import useAuth from "../context/AuthContext";

export default function LoginPage() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={() => login("Kannan")}>Login</button>
        </>
      )}
    </div>
  );
}
