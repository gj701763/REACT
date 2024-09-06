import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="flex flex-wrap w-full gap-5">
        <Card userName="Nikita Jadhav" textBtn="click me !" />
        <Card userName="Payal Jadhav" textBtn="visit me !" />
        <Card userName="Nikita Jadhav" textBtn="click me !" />
        <Card userName="Payal Jadhav" textBtn="visit me !" />
        <Card userName="Nikita Jadhav" textBtn="click me !" />
        <Card userName="Payal Jadhav" textBtn="visit me !" />
        <Card userName="Nikita Jadhav" textBtn="click me !" />
        <Card userName="Payal Jadhav" textBtn="visit me !" />
        <Card userName="Nikita Jadhav" textBtn="click me !" />
        <Card userName="Payal Jadhav" textBtn="visit me !" />
        <Card userName="Nikita Jadhav" textBtn="click me !" />
        <Card userName="Payal Jadhav" textBtn="visit me !" />
      </div>
    </>
  );
}

export default App;
