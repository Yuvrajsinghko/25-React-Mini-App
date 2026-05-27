import React, { useState } from "react";

export interface Person {
  name: string;
  age: number;
  isTall: boolean;
}

const Person = (props: Person) => {
  const [bio, setBio] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };

  // For OnSubmit
  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <p>Age{props.age}</p>
      <p>{props.isTall ? "Person Is tall" : "Person Not Tall"}</p>

      <button
        style={{ padding: "5px 5px", borderRadius: "20px", border: "none" }}
      >
        Toggle Info
      </button>
      <p>
        {props.name} Bio:{!bio ? "No Bio Available" : bio}
      </p>
      <input onChange={handleChange} type="text" />
    </div>
  );
};

export default Person;
