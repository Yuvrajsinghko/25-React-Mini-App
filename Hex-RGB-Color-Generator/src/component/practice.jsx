import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([1, 2, 3]);

  function handleClick() {
    items.push(4);
    setItems(items);
  }

  return (
    <>
      <div>Items: {items.join(", ")}</div>
      <button onClick={handleClick}>Add Item</button>
    </>
  );
}
