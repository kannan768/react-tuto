// src/Baby2.js
import React from "react";
import { useSelector } from "react-redux";

export default function Baby2() {
  const entries = useSelector((state) => state.user.userInfo);

  return (
    <div>
      <h2>Baby2 welcomes you</h2>
      <h4>List of Entries:</h4>
      {entries.length === 0 ? (
        <p>No entries submitted yet.</p>
      ) : (
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              <strong>{entry.name}</strong> | {entry.email} | {entry.age} | 📞{" "}
              {entry.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
