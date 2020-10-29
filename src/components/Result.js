import React from "react";

function Result(props) {
    
  return (
    <div class="results">
      <h2>Personal Info</h2>
      <div>Name: {props.state.name}</div>
      <br />
      <div>Email: {props.state.email}</div>
      <br />
      <div>Phone Number: {props.state.phoneNumber}</div>
      <br />
      <h2>Studies</h2>
      <div>School Name: {props.state.schoolName}</div>
      <br />
      <div>Graduation Date: {props.state.graduationDate}</div>
      <br />
      <h2>Work</h2>
      <div>Company: {props.state.company}</div>
      <br />
      <div>Position: {props.state.position}</div>
      <br />
      <div>Worked From: {props.state.workedFrom}</div>
      <br />
      <div>Worked Until: {props.state.workedUntil}</div>
      <br />
      <button onClick={props.toggleDisplayResults}>Edit</button>
    </div>
  );
}

export default Result;
