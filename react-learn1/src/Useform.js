import React, { useState } from 'react'

export const Useform = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    const resetForm = () => {
        setValue(initialValue);
    }
 return { value, handleChange, resetForm };
}
