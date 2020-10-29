import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form.js";
import Result from "./components/Result.js";

function App() {
  const [displayResults, setDisplayResults] = useState(false);

  function toggleDisplayResults(e) {
    e.preventDefault();
    setDisplayResults(() => !displayResults);
  }

  const [cvData, setCvData] = useState({});
  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setCvData((cvData) => {
      return {
        ...cvData,
        [name]: value,
      };
    });
  }

  if (displayResults) {
    return (
      <div>
        <Result toggleDisplayResults={toggleDisplayResults} state={cvData} />
      </div>
    );
  }
  return (
    <div>
      <Form
        handleInputChange={handleInputChange}
        toggleDisplayResults={toggleDisplayResults}
        state={cvData}
      />
    </div>
  );
}

export default App;
