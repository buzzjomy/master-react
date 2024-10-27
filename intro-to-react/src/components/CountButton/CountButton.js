import React, { useState } from "react";
import "./CountButton.css";

const CountButton = () => {
  let [currentCount, setCurrentCount] = useState(0);
  const handleClick = () => {
    setCurrentCount(currentCount + 1);
  };
  return (
    <div className="displayButton">
      <button onClick={handleClick}>+1</button>
      <div>{currentCount}</div>
    </div>
  );
};
export default CountButton;
