import React from "react";
import Burguer from "./Burguer";

function BurguerButton({ clicked, handleClick }) {
  return (
    <Burguer>
      <div
        className={`icon nav-icon-5 ${clicked ? "open" : ""}`}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
  );
}

export default BurguerButton;
