import React, { useState } from "react";
import { NavContainer, BgDiv } from "./NavBar";
import BurguerButton from "./BurguerButton";
import { useLocation } from "react-router-dom";

function NavBar() {
  const [clicked, setclicked] = useState(false);

  const { pathname } = useLocation();

  const handleClick = () => {
    setclicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <h2>Portfolio</h2>

        <div className={`links ${clicked ? "active" : ""}`}>
          <a
            href="/"
            onClick={handleClick}
            className={pathname === "/" && "yes"}
          >
            Home
          </a>
          <a
            href="/About-Me"
            onClick={handleClick}
            className={pathname === "/About-Me" && "yes"}
          >
            About Me
          </a>
          <a
            href="/Projects"
            onClick={handleClick}
            className={pathname === "/Projects" && "yes"}
          >
            Projects
          </a>
          <a
            href="/Contact"
            onClick={handleClick}
            className={pathname === "/Contact" && "yes"}
          >
            Contact
          </a>

          <a className="invisible">k </a>
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
