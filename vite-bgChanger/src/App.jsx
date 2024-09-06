import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed inset-x-0 flex flex-wrap justify-center bottom-10">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
          <button
            className="px-4 py-1 text-lg font-semibold text-center rounded-full shadow-lg outline-none test-white"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="px-4 py-1 text-lg font-semibold rounded-full shadow-lg outline-none test-center test-white"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="px-4 py-1 text-lg font-semibold rounded-full shadow-lg outline-none test-center test-white"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="px-4 py-1 text-lg font-semibold rounded-full shadow-lg outline-none test-center test-white"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="px-4 py-1 text-lg font-semibold rounded-full shadow-lg outline-none test-center test-white"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="px-4 py-1 text-lg font-semibold rounded-full shadow-lg outline-none test-center test-white"
            style={{ backgroundColor: "#A52A2A" }}
            onClick={() => setColor("#A52A2A")}
          >
            Brown
          </button>
          <button
            className="px-4 py-1 text-lg font-semibold rounded-full shadow-lg outline-none test-center test-white"
            style={{ backgroundColor: "#FF1493" }}
            onClick={() => setColor("#FF1493")}
          >
            DeepPink
          </button>
          <button
            className="px-4 py-1 text-lg font-semibold rounded-full shadow-lg outline-none test-center test-white"
            style={{ backgroundColor: "#4B0082" }}
            onClick={() => setColor("#4B0082")}
          >
            Indigo
          </button>
          <button
            className="px-4 py-1 text-lg font-semibold rounded-full shadow-lg outline-none test-center test-white"
            style={{ backgroundColor: "#6A5ACD" }}
            onClick={() => setColor("#6A5ACD")}
          >
            SlateBlue
          </button>
          <button
            className="px-4 py-1 text-lg font-semibold rounded-full shadow-lg outline-none test-center test-white"
            style={{ backgroundColor: "#90EE90" }}
            onClick={() => setColor("#90EE90")}
          >
            LightGreen
          </button>
          <button
            className="px-4 py-1 text-lg font-semibold rounded-full shadow-lg outline-none test-center test-white"
            style={{ backgroundColor: "#FFA07A" }}
            onClick={() => setColor("#FFA07A")}
          >
            LightSalmon
          </button>
          <button
            className="px-4 py-1 text-lg font-semibold rounded-full shadow-lg outline-none test-center test-white"
            style={{ backgroundColor: "#FF00FF" }}
            onClick={() => setColor("#FF00FF")}
          >
            Magenta
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
