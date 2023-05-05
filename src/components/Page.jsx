import React, { useState } from "react";
import "../html-js/style.css";
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

//buttonとscreenを分けてpageで合体してpropsの受け取りを学べるように
//作成する手順の説明とreactの説明
//教材にまとまりのある説明をするしてはさめそうならreactの説明も入れる
