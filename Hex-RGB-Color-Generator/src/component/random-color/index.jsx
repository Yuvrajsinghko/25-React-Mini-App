import React, { useEffect, useState } from "react";

const RandomColorGenerator = () => {
  const [typeOfColor, settypeOfColor] = useState("hex");
  const [color, setcolor] = useState("#000000");

  const randomColorUtility = (len) => {
    return Math.floor(Math.random() * len);
  };

  const handleRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setcolor(hexColor);
  };
  const handleRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setcolor(`rgb(${r},${g},${b})`);
  };
  useEffect(() => {
    if (typeOfColor === "rgb") handleRandomRgbColor();
    else handleRandomHexColor();
  }, [typeOfColor]);
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
          textAlign: "center",
        }}
        className="flex justify-around flex-col items-center"
      >
        <div>
          <button
            onClick={() => settypeOfColor("hex")}
            className="border-2 border-amber-300 text-3xl p-5 text-teal-400"
          >
            Create Hex Color
          </button>
          <button
            onClick={
              typeOfColor === "hex"
                ? handleRandomHexColor
                : handleRandomRgbColor
            }
            className="border-2 border-amber-300 text-3xl p-5 text-teal-400 "
          >
            Generate Random Color
          </button>
          <button
            onClick={() => settypeOfColor("rgb")}
            className="border-2 border-amber-300 text-3xl p-5 text-teal-400 "
          >
            Create RGB Color
          </button>
        </div>
        <div className="flex justify-center flex-col items-center gap-5 text-[#fff] font-bold text-4xl mt-10">
          <h3>{typeOfColor === "rgb" ? "RGB Color " : "Hex Color "}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
};

export default RandomColorGenerator;
