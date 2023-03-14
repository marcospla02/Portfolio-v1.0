import styled from "styled-components";

export const Me = styled.div`
  display: flex;
  background-color: var(--aliceblue);
  height: 60%;
  width: 50%;
  border-radius: 10px;
  padding: 2% 2%;
  margin-left: 3%;
  margin-top: 3%;
  box-shadow: 8px 4px 4px rgba(0, 0, 0, 0.74);
  h2 {
    color: #205295;
  }
  h3 {
    margin-top: -23px;
    margin-left: -2%;
    color: #a8a8a8;
  }

  @media (max-width: 1115px) {
    width: 90%;
  }
`;

export const Title = styled.div`
  height: 20px;
  width: 100%;
`;

export const AboutMe = styled.div`
  display: flex;
  align-items: center;
  height: 50%;
  margin-top: 19%;
  margin-left: -50%;
  @media (max-width: 1112px) and (min-width: 900px) {
    margin-top: 100px;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 10%;
    font-size: small;
    @media (max-width: 400px) {
      @media (min-width: 200px) {
        font-size: x-small;
      }
    }
  }
`;

export const MyPicture = styled.div`
  margin-left: 650px;
  position: absolute;
  top: 24%;
  right: 9%;
  img {
    filter: brightness(140%);
    width: 240px;
    height: 230px;
    border-radius: 150px;
    border: 5px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1118px) {
    top: 5000px;
    img {
      opacity: 0;
      top: 5000;
      background-color: blue;
    }
  }
`;

export const Icons = styled.div`
  position: fixed;
  bottom: 10%;
  left: 5%;
  display: flex;
  margin-right: 10px;
  .div1 {
    margin-right: 11px;
  }

  .div1:hover {
    cursor: pointer;
    margin-top: -3px;
  }
`;

export const Cv = styled.div`
  position: absolute;
  left: 90%;
  bottom: 10.4%;
  @media (max-width: 700px) {
    left: 80%;
  }

  p {
    line-height: 0;
  }

  img:hover {
    cursor: pointer;
    position: static;
    margin-top: -3px;
    box-shadow: 4px 2px 2px rgba(0, 0, 0, 0.74);
  }
`;
