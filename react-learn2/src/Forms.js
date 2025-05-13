import React,{useState} from 'react'

const Forms = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    })
    const[entries, setEntries] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            const updatedEntries = [...entries];
            updatedEntries[editIndex] = formData;
            setEntries(updatedEntries);
            setEditIndex(null);
        } else {
            setEntries([...entries, formData]);
        }
        console.log("Form Data:", formData);
        setFormData({
            name: "",
            email: "",
            phone: "",
            password: "",
        })
      };

      const handleEdit = (index) => {
        const entryToEdit = entries[index];
        setFormData(entryToEdit);
        setEditIndex(index);
      }

      const handleDelete = (index) => {
        const newEntries = entries.filter((_, i) => i !== index);
        setEntries(newEntries);
      }

      const reset=() => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            password: "",
        })
      }
      
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <br />

            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <br />

            <label>
                Phone:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <br />

            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <br />

            <button type="submit">{editIndex !== null ? "Update" : "Submit"}</button>
        </form>
        <button onClick={reset}>Reset</button>

        <h2>Form Data:</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {entries.map((entry, index) => (
                    <tr key={index}>
                        <td>{entry.name}</td>
                        <td>{entry.email}</td>
                        <td>{entry.phone}</td>
                        <td>{entry.password}</td>
                        <td>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
    </div>
  )
}

export default Forms
