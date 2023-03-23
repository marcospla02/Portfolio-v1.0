import React from "react";
// import error404 from "../../assests/img/error404.png";
import { Container404 } from "./NotFounCss";

const NotFound = () => {
  return (
    <Container404>
      <h1>404</h1>
      <h3>Not Found</h3>
      <p>The requested resource is not on this server!</p>
    </Container404>
  );
};

export default NotFound;
