import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";

const Display = ({ handleInputValue, result, number, operator}) => {
  const [input, setInput] = useState("");

  const [trigger, setTrigger] = useState(true);

  const handleInputChange = (event) => {
    const updatedValue = event.target.value;
    console.log(updatedValue);
    setInput(updatedValue);
    handleInputValue(updatedValue);
  };

  useEffect(()=>{
    if(number){
        setInput((prev)=>{
            return prev+number;
        })
    }

    return(()=>{
      setTrigger(false);
    })
  },[number, trigger]);

  useEffect(()=>{
    if(operator){
      setInput((prev)=>{
        return prev+operator.toString()
      })
    }
  
  }, [operator]);

  useEffect(()=>{
    handleInputValue(input)
  },[input]);


  useEffect(()=>{
    if(result){
      const updatedInput = result.toString();
      setInput(updatedInput)
    }
  },[result])

  console.log("input", input, typeof(input));

  return (
    <div className="display">
    <input
        type="text"
        className="displayInput"
        value={input}
        onChange={(event) => {
          handleInputChange(event);
        }}
        autoFocus
      />
      
    </div>
  );
};

export default Display;
