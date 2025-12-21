import React, { useState } from "react";

const RandomColorGenerator = () => {

  const [typeOfColor, settypeOfColor] = useState('hex')
  const [color, setcolor] = useState('#000000')
  return (
    <div style={{width:'100vw',height:'100vh',background:color,textAlign:"center",}} className="flex justify-center items-start gap-12" >
      <button className="border-2 border-amber-300 text-3xl p-5 text-teal-400">Create Hex Color</button>
      <button className="border-2 border-amber-300 text-3xl p-5 text-teal-400 ">Generate Random Color</button>
      <button className="border-2 border-amber-300 text-3xl p-5 text-teal-400 ">Create RGB Color</button>
    </div>
  );
};

export default RandomColorGenerator;
