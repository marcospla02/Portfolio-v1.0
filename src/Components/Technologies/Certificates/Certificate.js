import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  .container {
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height: auto;
    position: relative;
  }
  .x {
    border-radius: 15px;
    cursor: pointer;
    border: none;
    background-color: #fff;
    position: absolute;
    right: 5%;
    top: 2%;
  }

  @media (max-width: 768px) {
    .picture {
      align-items: center;
      justify-content: center;
      height: 100%;
      max-width: 100%;
    }
  }
`;

export const Image = styled.figure`
  @media (min-width: 768px) {
    img {
      height: 100%;
      max-height: 26.5em;
      max-width: 40em;
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    .picture {
      position: static;
      top: 5%;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
`;
