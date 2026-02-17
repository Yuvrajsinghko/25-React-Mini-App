import "./style.css";
import data from "./data";
import { useState } from "react";

const Accordian2 = () => {
  const [selected, setSelected] = useState(null);
  const [multipleSelect, setMultipleSelect] = useState(false);
  const [multipleId, setMultipleId] = useState([]);
  const handleSingleSelection = (id) => {
    setSelected(id);
    if (id == selected) setSelected(null);
  };
  const handleMultiSelection = (currentId) => {
    let cpyMultiple = [...multipleId];
    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(currentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultipleId(cpyMultiple);
  };
  console.log(multipleId);

  return (
    <div>
      <div className="wrapper">
        <button onClick={() => setMultipleSelect(!multipleSelect)}>
          Enable MultiSelect
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map(({ id, question, answer }) => {
              return (
                <div key={id} className="item">
                  <div
                    onClick={
                      multipleSelect
                        ? () => handleMultiSelection(id)
                        : () => handleSingleSelection(id)
                    }
                    className="title"
                  >
                    <h3>{question}</h3>
                    <span>+</span>
                  </div>
                  {/* {multipleSelect && selected == id ? (
                    ""
                  ) : (
                    <div className="content">{answer}</div>
                  )} */}
                  {selected === id || multipleId.indexOf(id) != -1 ? (
                    <div className="content">{answer}</div>
                  ) : null}
                </div>
              );
            })
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordian2;
