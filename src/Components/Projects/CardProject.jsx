import React from "react";
import { Container, Image } from "./CssCard";
import linkIcon from "../../assests/img/enlazar.png";

function CardProject({ title, link, image, description }) {
  return (
    <Container>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p>{title}</p>
            <Image>
              <img src={image} alt="image photo"></img>
            </Image>
          </div>
          <div className="flip-card-back">
            <div className="container-p-back">
              <p className="p-back">{description}</p>
            </div>
            <a href={link}>
              <img src={linkIcon} alt="link to project"></img>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CardProject;
