// src/Baby1.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "./Slice/Userslice";

export default function Baby1() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEntry(form));
    setForm({ name: "", email: "", age: "", phone: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <label>Age</label>
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
        <br />
        <label>Phone Number</label>
        <input
          type="number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
