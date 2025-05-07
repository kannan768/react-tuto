
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function UserForm() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", email: "" });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    if (editMode) {
      setUsers(users.map((user) => (user.id === form.id ? form : user)));
      setEditMode(false);
    } else {
      setUsers([...users, { ...form, id: uuidv4() }]);
    }

    setForm({ id: "", name: "", email: "" });
  };

  const handleEdit = (user) => {
    setForm(user);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>{editMode ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit">{editMode ? "Update" : "Add"}</button>
      </form>

      <h3>User List</h3>
      {users.length === 0 && <p>No users added.</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button
              onClick={() => handleEdit(user)}
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(user.id)}
              style={{ marginLeft: "5px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserForm;
