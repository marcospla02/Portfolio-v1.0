import React from "react";
import Nav from "../Nav/Nav";
import CardProject from "./CardProject";
import { Card, Container } from "./ProjectCss";
import projectsInfo from "./ProjectsInfo";

function Projects() {
  return (
    <Container>
      <Nav />
      <Card>
        {projectsInfo.map((project) => {
          return (
            <CardProject
              key={project.id}
              id={project.id}
              title={project.title}
              link={project.link}
              image={project.image}
              description={project.description}
            />
          );
        })}
      </Card>
    </Container>
  );
}

export default Projects;
