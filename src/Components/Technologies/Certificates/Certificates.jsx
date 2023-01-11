import React from "react";
import certificatePicture from "../../../assests/img/Certificado.jpg";
import x from "../../../assests/img/x.png";
import { Container, Image } from "./Certificate";

function Certificates({ close }) {
  return (
    <Container>
      <article className="container">
        <button onClick={() => close(false)} className="x">
          <img src={x} alt="close" />
        </button>
        <Image>
          <img src={certificatePicture} alt="certificate" className="picture" />
        </Image>
      </article>
    </Container>
  );
}

export default Certificates;
