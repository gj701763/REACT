import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexs/theme";


function App() {
  
  const [themeMode, setThemeMode] = useState("light");
  
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  },[themeMode]);

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap items-center min-h-screen">
        <div className="w-full">
          <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
