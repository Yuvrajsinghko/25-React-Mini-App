import { useState } from "react";
import "./style.css";
const LightDarkMode = () => {
  const [theme, setTheme] = useState("Light");
  const light = {
    backgroundColor: "white",
    color: "black",
    height: "100vh",
    width: "100vw",
  };
  const dark = {
    backgroundColor: "black",
    color: "white",
    height: "100vh",
    width: "100vw",
  };
  const handleTheme = () => {
    if (theme === "Light") {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };
  return (
    <div style={theme === "Dark" ? light : dark} className="main-cont">
      <h1>Hello Yuvraj</h1>
      <button onClick={handleTheme}>Change Theme</button>
    </div>
  );
};

export default LightDarkMode;
