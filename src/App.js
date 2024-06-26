import { useState } from "react";
import "./App.css";

import Draggable from "react-draggable";

export default function App() {
  return (
    <div className="App">
      <h1>Drag the box..!</h1>
      <Draggable>
        <div className="main-container">
          <Steps />
        </div>
      </Draggable>
    </div>
  );
}

function Steps() {
  const [jumpValue, setJumpvalue] = useState(1);
  return (
    <div className="dragable-Component">
      <button onClick={() => setJumpvalue(jumpValue + 1)}> + </button> Jump
      value is {jumpValue}
      <button onClick={() => setJumpvalue(jumpValue - 1)}>- </button>
      {jumpValue >= 0 ? (
        <Datechanger modifierValue={jumpValue} />
      ) : (
        <Datechanger modifierValue={0} />
      )}
    </div>
  );
}
function Datechanger({ modifierValue }) {
  const [date, setDate] = useState("May 23 2024");
  const dateModifier = (modifierValue) => {
    const currentDate = new Date(date);
    const ddate = currentDate
      .setDate(currentDate.getDate() + modifierValue)
      .toString();
    console.log(ddate);
    setDate(currentDate.toString());
  };
  return (
    <div>
      <button onClick={() => dateModifier(modifierValue)}>+</button>
      {date.toString()}
      <button onClick={() => dateModifier(-modifierValue)}>-</button>
    </div>
  );
}
