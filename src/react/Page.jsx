import React, { useState } from "react";
import "../javascript/style.css";
import { Button } from "./Button";
import { Screen } from "./Screen";

export const Page = () => {
  const [screenState, setScreenState] = useState("");

  const handleButtonClick = e => {
    setScreenState(e.target.textContent);
  };

  return (
    <div>
      <Screen content={screenState} />
      <div className="button-container">
        {["A", "B", "C"].map(text => (
          <Button key={text} buttonText={text} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};
