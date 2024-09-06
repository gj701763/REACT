import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <div className="w-full max-w-lg px-4 py-3 mx-auto my-8 text-orange-500 bg-gray-800 rounded-lg shadow-md">
        <h1 className="my-3 text-lg font-semibold text-center text-white">
          Time passed: {secondsPassed.toFixed(3)}
        </h1>
        <div className="flex justify-center gap-5">
          <button
            className="outline-none bg-blue-700 text-lg font-semibold text-white px-3 py-0.5 rounded-lg"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="outline-none bg-red-700 text-lg font-semibold text-white px-3 py-0.5 rounded-lg"
            onClick={handleStop}
          >
            Stop
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
