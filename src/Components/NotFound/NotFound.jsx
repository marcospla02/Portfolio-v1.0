import React from "react";
import { Container404 } from "./NotFounCss";
import Nav from "../Nav/Nav";

const NotFound = () => {
  return (
    <Container404>
      <Nav />
      <h1>404</h1>
      <h3>Not Found</h3>
      <p>The requested resource is not on this server!</p>
    </Container404>
  );
};

export default NotFound;
