import React, { useState } from "react";
import { NavContainer, BgDiv } from "./NavBar";
import BurguerButton from "./BurguerButton";

function NavBar() {
  const [clicked, setclicked] = useState(false);

  const handleClick = () => {
    setclicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <h2>Portfolio</h2>

        <div className={`links ${clicked ? "active" : ""}`}>
          <a href="/" onClick={handleClick}>
            Home
          </a>
          <a href="/Technologies" onClick={handleClick}>
            Technologies
          </a>
          <a href="/Projects" onClick={handleClick}>
            Projects
          </a>
          <a href="/Contact" onClick={handleClick}>
            Contact
          </a>
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default NavBar;
