import { useState } from "react";
import "./style.css";
const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const generateRandomHex = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let HexColor = "#";
    for (let i = 0; i < 6; i++) {
      HexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(HexColor);
    
  };
  const generateRandomRGB = () => {
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);

    let code = `rgb(${red},${green},${blue})`;
    setColor(code);
    
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <h2>Random Color Generator</h2>
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
      <button
        onClick={typeOfColor === "hex" ? generateRandomHex : generateRandomRGB}
      >
        Generate Random Color
      </button>
      <button onClick={() => setTypeOfColor("hex")}>Generate Hex Color</button>
      <div>
        <h2 style={{ color: "white" }}>
          {typeOfColor === "hex" ? `Hex Color:${color}` : `RGB Color:${color}`}
        </h2>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
