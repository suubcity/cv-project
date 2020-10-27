import React from "react";
import "./App.css";
import Form from "./components/Form.js";
import Result from "./components/Result.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayingResults: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.displayingResults = this.displayingResults.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

  displayingResults(e) {
    e.preventDefault();
    this.setState((state) => ({displayingResults: !state.displayingResults }));
    console.log(this.state.displayingResults);
  }

  render() {
    if (this.state.displayingResults) {
      return (
        <div>
          <Result 
          state={this.state}
          displayingResults={this.displayingResults}
          />
        </div>
      );
    }
    return (
      <div>
        <Form
          handleInputChange={this.handleInputChange}
          displayingResults={this.displayingResults}
          state={this.state}
        />
      </div>
    );
  }
}
export default App;
