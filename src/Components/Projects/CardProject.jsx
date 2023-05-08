import React from "react";
import { Container, Image, Video } from "./CssCard";
import linkIcon from "../../assests/img/enlazar.png";

function CardProject({ title, link, image, description, video }) {
  console.log("video:", video);
  return (
    <Container>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p>{title}</p>
            {video ? (
              <Video>
                <video loop autoPlay muted>
                  <source src={video} type="video/mp4" />
                </video>
              </Video>
            ) : (
              <Image>
                <img src={image} alt="image photo"></img>
              </Image>
            )}
          </div>
          <div className="flip-card-back">
            <div className="container-p-back">
              <p className="p-back">{description}</p>
            </div>
            <a href={link} target="_blank">
              <img src={linkIcon} alt="link to project"></img>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CardProject;
