import "./App.css";
import Heading from "./components/Heading";
import Todilist from "./components/Todilist";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="flex flex-col gap-3 bg-white rounded-lg w-96 h-[500px]">
      <Counter />
      <Heading />
      <Todilist title="Study" />
      <Todilist title="Eat" />
      <Todilist title="Wordout" />
      <Todilist title="Sleep" />
      <Todilist title="Code" />
      <Todilist title="Writting " />
      <Button />
    </div>
  );
}

export default App;
