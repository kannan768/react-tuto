import React, { useState } from "react";

export default function Fileupload() {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    const uploadedFile = e.target.files[0];

    if (uploadedFile && uploadedFile.size < 10 * 1024 * 1024) {
      // 10MB
      setFile(uploadedFile);
    } else {
      alert("Please upload a file smaller than 10MB.");
    }
  };

  const handleClick = () => {
    if (!file) {
      alert("Please upload a file before submitting.");
    } else {
      // You can handle your file upload logic here
      alert(`Uploading: ${file.name}`);
    }
  };

  return (
    <>
      <input type="file" onChange={handleFile} />
          {file ? <p>selectedfile{ file.name}</p>:<p>please upload file</p>}
      <button type="submit" onClick={handleClick}>
        Upload
      </button>
    </>
  );
}
