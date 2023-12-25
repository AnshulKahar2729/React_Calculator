import React, { useState } from "react";

const Buttons = ({input, handleResult, handleNumber, handleOperator}) => {

    const handleEqualButton = () => {
        const result = eval(input);
        console.log(input);
        handleResult(result);
    }

    const handleNumberClick = (event) => {
      const buttonNum = event.target.textContent;
      console.log("button", buttonNum);
      handleNumber(buttonNum);
    }

    const handleOperatorClick = (event) => {
      const buttonOp = event.target.textContent;
      handleOperator(buttonOp);
    }

  return (
    <div className="buttonContainer">
      <button
        className=" text-2xl border-0
         bg-gray-300 w-[70px] h-[70px] btn text-black"
      >
        AC
      </button>
      <button
        className=" text-2xl border-0
         bg-gray-300 btn w-[70px] h-[70px] rounded-lg text-black"
      >
        +/-
      </button>
      <button
      onClick={handleOperatorClick}
        className=" text-2xl border-0
         bg-gray-300 btn w-[70px] h-[70px] rounded-lg text-black"
      >
        %
      </button>
      <button
      onClick={handleOperatorClick}
        className=" text-2xl border-0
         bg-[#FF9F0A] btn w-[70px] h-[70px] rounded-lg text-white"
      >
        /
      </button>
      <button
        onClick={handleNumberClick}
        className=" text-2xl border-0
         bg-[#333333]  btn w-[70px] h-[70px] rounded-lg text-white"
      >
        7
      </button>
      <button
      onClick={handleNumberClick}
        className=" text-2xl border-0
         bg-[#333333] btn w-[70px] h-[70px] rounded-lg text-white"
      >
        8
      </button>
      <button
      onClick={handleNumberClick}
        className=" text-2xl border-0
         bg-[#333333] btn w-[70px] h-[70px] rounded-lg text-white"
      >
        9
      </button>
      <button
      onClick={handleOperatorClick}
        className=" text-2xl border-0
         bg-[#FF9F0A] btn w-[70px] h-[70px] rounded-lg text-white"
      >
        *
      </button>
      <button
      onClick={handleNumberClick}
        className=" text-2xl border-0
         bg-[#333333] btn w-[70px] h-[70px] rounded-lg text-white"
      >
        4
      </button>
      <button
      onClick={handleNumberClick}
        className=" text-2xl border-0
         bg-[#333333] btn w-[70px] h-[70px] rounded-lg text-white"
      >
        5
      </button>
      <button
      onClick={handleNumberClick}
        className=" text-2xl border-0
         bg-[#333333] btn w-[70px] h-[70px] rounded-lg text-white"
      >
        6
      </button>
      <button
      onClick={handleOperatorClick}
        className=" text-2xl border-0
         bg-[#FF9F0A] btn w-[70px] h-[70px] rounded-lg text-white"
      >
        -
      </button>
      <button
      onClick={handleNumberClick}
        className=" text-2xl border-0
         bg-[#333333] btn w-[70px] h-[70px] rousnded-lg text-white"
      >
        1
      </button>
      <button
      onClick={handleNumberClick}
        className=" text-2xl border-0
         bg-[#333333] btn w-[70px] h-[70px] rounded-lg text-white"
      >
        2
      </button>
      <button
      onClick={handleNumberClick}
        className=" text-2xl border-0
         bg-[#333333] btn w-[70px] h-[70px] rounded-lg text-white"
      >
        3
      </button>
      <button
      onClick={handleOperatorClick}
        className=" text-2xl border-0
         bg-[#FF9F0A] btn w-[70px] h-[70px] rounded-lg text-white"
      >
        +
      </button>
      <button
      onClick={handleNumberClick}
        className=" text-2xl border-0
         bg-[#333333] btn w-[160px] h-[70px] rounded-lg text-white"
      >
        0
      </button>
      <button
        className=" text-2xl border-0
         bg-[#333333] btn w-[70px] h-[70px] rounded-lg text-white"
      >
        .
      </button>
      <button
        onClick={handleEqualButton}
        className=" text-2xl border-0
         bg-[#FF9F0A] btn w-[70px] h-[70px] rounded-lg text-white"
      >
        =
      </button>
    </div>
  );
};

export default Buttons;
