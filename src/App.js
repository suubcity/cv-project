import React, { useState, useEffect } from "react";
import camelCase from "camelcase";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [isEditing, setIsEditing] = useState(true);

  const [formData, setForm] = useState({});

  function handleInputChange(e) {
    setForm({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function handleEditClick(e) {
    // e.preventDefault();
    setIsEditing(true);
  }

  function displayPage() {
    if (isEditing) {
      return (
        <Form
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          formData={formData}
        />
      );
    }
    return <Result handleEditClick={handleEditClick} formData={formData}/>;
  }

  return <div>{displayPage()}</div>;
}

export default App;
