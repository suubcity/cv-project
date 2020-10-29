import React from "react";

function Form(props) {
  return (
    <form class="form" onSubmit={props.toggleDisplayResults}>
      <h2>Personal Info</h2>
      <label>
        Name
        <input
          onChange={props.handleInputChange}
          name="name"
          type="text"
          value={props.state.name}
        ></input>
      </label>
      <br />
      <label>
        Email
        <input
          onChange={props.handleInputChange}
          name="email"
          type="text"
          value={props.state.email}
        ></input>
      </label>

      <br />
      <label>
        Phone Number
        <input
          onChange={props.handleInputChange}
          name="phoneNumber"
          type="text"
          value={props.state.phoneNumber}
        ></input>
      </label>
      <br />
      <h2>Studies</h2>

      <label>
        School Name
        <input
          onChange={props.handleInputChange}
          name="schoolName"
          type="text"
          value={props.state.schoolName}
        ></input>
      </label>
      <br />

      <label>
        Graduation Date
        <input
          onChange={props.handleInputChange}
          name="graduationDate"
          type="date"
          value={props.state.graduationDate}
        ></input>
      </label>
      <br />

      <h2>Work</h2>
      <label>
        Company
        <input
          onChange={props.handleInputChange}
          name="company"
          type="text"
          value={props.state.company}
        ></input>
      </label>
      <br />
      <label>
        Position
        <input
          onChange={props.handleInputChange}
          name="position"
          type="text"
          value={props.state.position}
        ></input>
      </label>
      <br />
      <label>
        Worked From
        <input
          onChange={props.handleInputChange}
          name="workedFrom"
          type="date"
          value={props.state.workedFrom}
        ></input>
      </label>
      <br />
      <label>
        Worked Until
        <input
          onChange={props.handleInputChange}
          name="workedUntil"
          type="date"
          value={props.state.workedUntil}
        ></input>
      </label>
      <br />

<button type="submit">Submit</button>
    </form>
  );
}

export default Form;
