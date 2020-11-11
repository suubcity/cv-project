import React, { useState } from "react";

function Form(props) {
  const { handleSubmit, handleInputChange, formData } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>CV Form</h1>
        <h3>All Fields Required</h3>
        <label for="name">
          Name{" "}
          <input
            onChange={handleInputChange}
            id="name"
            name="name"
            type="text"
            placeholder="Enter Name Here"
            value={formData["name"]}
          ></input>
        </label>
        <br />
        <label for="age">
          Age{" "}
          <input
            onChange={handleInputChange}
            id="age"
            name="age"
            type="number"
            placeholder="Enter Age Here"
            value={formData["age"]}
          ></input>
        </label>
        <br />
        <label for="jobTitle">
          Job Title{" "}
          <input
            onChange={handleInputChange}
            id="jobTitle"
            name="jobTitle"
            type="text"
            placeholder="Enter Job Title Here"
            value={formData["jobTitle"]}
          ></input>
        </label>
        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
