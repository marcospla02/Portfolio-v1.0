import React from "react";
import Nav from "../Nav/Nav";
import { Me, AboutMe, Title, Container } from "./HomeStyled";

function Home() {
  return (
    <Container>
      <Nav />
      <Me>
        <Title>
          <h2>Marcos Pla Señorans</h2>
          <h3>Full Stack Developer</h3>
        </Title>
        <AboutMe>
          Hola!, te cuento experiencia trabajando en NodeJs, React, Redux, SQL,
          postgresSQL, mongoDb, Mongoose, Css, Html entre otras tecnologías del
          sector.
        </AboutMe>
      </Me>
    </Container>
  );
}

export default Home;
