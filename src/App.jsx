import { useContext, useEffect } from "react";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Context from "./context/ThemeContext";

function App() {
  const { theme, setTheme } = useContext(Context);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="bg-light-primary dark:bg-dark-primary min-h-screen dark:text-dark-text">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
