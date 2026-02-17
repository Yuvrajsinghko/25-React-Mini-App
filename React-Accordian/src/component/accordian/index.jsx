// //single selection

// import { useState } from "react";

// import "./style.css";

// import data from "../accordian2/data";
// const Accordian = () => {
//   const [selected, setselected] = useState(null);
//   const [enableMultiSelection, setEnableMultiSelection] = useState(false);
//   const [multiple, setmultiple] = useState([]);

//   const handleSingleSelection = (getCurrentId) => {
//     setselected(getCurrentId === selected ? null : getCurrentId);
//   };

//   const handleMultiSelection = (getCurrentId) => {
//     let cpyMultiple = [...multiple];
//     const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    

//     if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
//     else cpyMultiple.splice(findIndexOfCurrentId, 1);

//     setmultiple(cpyMultiple);
//   };
//   console.log(selected, multiple);

//   return (
//     <div className="wrapper">
//       <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
//         Enable Multi Selection
//       </button>
//       <div className="accordian">
//         {data && data.length > 0 ? (
//           data.map((dataItems) => (
//             <div key={dataItems.id} className="item">
//               <div
//                 onClick={
//                   enableMultiSelection
//                     ? () => handleMultiSelection(dataItems.id)
//                     : () => handleSingleSelection(dataItems.id)
//                 }
//                 className="title"
//               >
//                 <h3>{dataItems.question}</h3>
//                 <span>+</span>
//               </div>
//               {enableMultiSelection
//                 ? multiple.indexOf(dataItems.id) !== -1 && (
//                     <div className="content">{dataItems.answer}</div>
//                   )
//                 : selected === dataItems.id && (
//                     <div className="content">{dataItems.answer}</div>
//                   )}
//               {/* {selected === dataItems.id ||
//               multiple.indexOf(dataItems.id) !== -1 ? (
//                 <div className="content">{dataItems.answer}</div>
//               ) : null} */}
//             </div>
//           ))
//         ) : (
//           <div>No data present</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Accordian;

// //multiple selection
