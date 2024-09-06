import React from "react";
import { useState, useEffect } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  //   //  const [value, setValue] = useState("odd");

  //   function isEven(num) {
  //     return num % 2 === 0;
  //   }

  //   function isOdd(num) {
  //     return num % 2 !== 0;
  //   }

  //   useEffect(() => {
  //     if (isEven(counter)) {
  //       setValue("even");
  //     } else if (isOdd(counter)) {
  //       setValue("odd");
  //     }
  //   });

  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <h1 className="text-lg font-bold">Counter is {counter}</h1>
      <p>Value is {counter % 2 === 0 ? "even" : "odd"}</p>
      <div className="flex gap-5 mt-4">
        <button
          onClick={() => setCounter(counter + 1)}
          className="px-5 py-2 bg-gray-300 rounded-lg"
        >
          Increment
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className="px-5 py-2 bg-gray-300 rounded-lg"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
