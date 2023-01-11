import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { Text, Technology, All, Links } from "./Tech";
import css from "../../assests/img/css3.png";
import html from "../../assests/img/html.png";
import express from "../../assests/img/express.js.png";
import node from "../../assests/img/nodeJs.png";
import js from "../../assests/img/Js.png";
import postrgeSql from "../../assests/img/postrgeSql.png";
import reactIcon from "../../assests/img/react.png";
import redux from "../../assests/img/redux.png";
import sequelize from "../../assests/img/sequelize.png";
import mongodb from "../../assests/img/mongodb.png";
import certificate from "../../assests/img/certificate.png";
import Certificates from "./Certificates/Certificates";

function Technologies() {
  const [state, setState] = useState(false);

  let modal;

  const showPicture = (e) => {
    setState(true);
  };

  if (state) modal = <Certificates close={setState} />;

  return (
    <All>
      <Nav />
      <Text>
        <article>
          <header>
            <h3>Me:</h3>
          </header>
          <footer>
            I am an enthusiastic young man determined to learn and acquire new
            experiences, with adaptability, problem solving and teamwork. I
            value constructive criticism in order to continue growing as a
            professional.
            <br />I seek to develop myself professionally within a team or
            individually, giving my best team or individually, giving the best
            of me, with a very good predisposition and attitude towards the
            attitude towards the responsibilities assigned to me.
          </footer>
        </article>
      </Text>
      <Links>
        <button onClick={showPicture}>
          <img src={certificate} alt="certificate" width="50px" />
        </button>
      </Links>
      <Technology>
        <img src={js} alt="javascript" width="70px" />
        <img src={reactIcon} alt="react" width="70px" />
        <img src={redux} alt="redux" width="70px" />
        <img src={css} alt="css" width="70px" />
        <img src={html} alt="html" width="70px" />
        <img src={node} alt="node" width="70px" />
        <img src={express} alt="express" width="70px" />
        <img src={postrgeSql} alt="postgres" width="70px" />
        <img src={sequelize} alt="sequlize" width="70px" />
        <img src={mongodb} alt="mongodb" width="70px" />
      </Technology>
      <div>{modal}</div>
    </All>
  );
}

export default Technologies;
