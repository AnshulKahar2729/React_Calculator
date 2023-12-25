import { useState, useTransition } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [number, setNumber] = useState();
  const [operator, setOperator] = useState("");

  const handleInputValue = (value) => {
    setInput(value);
    console.log(value);
  };

  const handleResult = (value) => {
    setResult(value);
  };

  const handleNumber = (value) => {
    setNumber(value);
    console.log("value", value)
  }

  const handleOperator = (value) => {
    setOperator(value);
  }

  return (
    <div className="App">
      <div className="container">
        <Display operator={operator} number={number} result={result} handleInputValue={handleInputValue}></Display>
        <Buttons handleOperator={handleOperator} handleNumber={handleNumber} input={input} handleResult={handleResult}></Buttons>
      </div>
    </div>
  );
}

export default App;
