import styled from "styled-components";

export const All = styled.div`
  height: 100vh;
  @media (max-width: 586px) {
    overflow-y: scroll;
  }
`;

export const Text = styled.div`
  display: flex;
  text-align: justify;
  padding: 0 25px 0 25px;
  @media (max-width: 438px) {
    font-size: small;
  }
`;

export const Technology = styled.div`
  margin-top: 10%;
`;

export const Links = styled.div`
  position: absolute;
  left: 1%;
  top: 88%;
  padding: 2px 2px;

  button {
    border: none;
    border-radius: 5px;
  }

  img:hover {
    margin-top: -3px;
    cursor: pointer;
  }

  .img2 {
    position: absolute;
    top: 0;
    left: 100%;
  }
`;

export const Fragment = styled.div`
  position: absolute;
  bottom: 12%;
  left: 2.5%;
`;
