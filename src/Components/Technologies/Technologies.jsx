import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { Text, Technology, All, Links, Fragment } from "./Tech";
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
import certificatePicture from "../../assests/img/Certificado.jpg";
import recomendation from "../../assests/img/recomendation.jpg";
import Certificates from "./Certificates/Certificates";
import like from "../../assests/img/like.png";

function Technologies() {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);

  let modal;

  const showPicture = () => {
    setState(true);
  };

  if (state)
    modal = <Certificates close={setState} info={certificatePicture} />;

  let modal2;

  const showPicture2 = () => {
    setState2(true);
  };

  if (state2) modal2 = <Certificates close={setState2} info={recomendation} />;

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
            <br />I seek to develop professionally within a team or
            individually, giving the best of me, with very good predisposition
            and attitude towards the responsibilities assigned to me.
          </footer>
        </article>
      </Text>
      <Fragment>
        <span>Certificate:</span>
      </Fragment>
      <Links>
        <button onClick={showPicture}>
          <img src={certificate} alt="certificate" width="50px" />
        </button>
        <div className="img2">
          <button onClick={showPicture2}>
            <img src={like} alt="recomendation" width="50px" />
          </button>
        </div>
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
      <div>{modal2}</div>
    </All>
  );
}

export default Technologies;
