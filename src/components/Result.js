import React from "react";

function Result(props) {

  return (
    <div>
      Result
      <div>
        Name: {props.formData.name}
        <br/>
        Age: {props.formData.age}
        <br/>
        Job Title: {props.formData.jobTitle}
        <br/>
        <button onClick={props.handleEditClick}>Edit</button>
      </div>
    </div>
  );
}

export default Result;
