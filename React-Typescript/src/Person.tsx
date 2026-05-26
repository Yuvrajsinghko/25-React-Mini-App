import { useState } from "react";

export interface Person {
  name: string;
  age: number;
  isTall: boolean;
}

const Person = (props: Person) => {
  const [isShowInfo, setShowInfo] = useState<boolean>(false);

  const toggleInfo=()=>{
    setShowInfo((prev)=>!prev);
  }

  return (
    <div>
      {isShowInfo && (
        <>
          <h2>Name:{props.name}</h2>
          <p>Age{props.age}</p>
          <p>{props.isTall ? "Person Is tall" : "Person Not Tall"}</p>
        </>
      )}
      <button onClick={toggleInfo} style={{padding:"5px 5px", borderRadius:"20px", border:"none"}}>Toggle Info</button>
    </div>
  );
};

export default Person;
