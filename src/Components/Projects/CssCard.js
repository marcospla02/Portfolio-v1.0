import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 8px 4px 4px rgb(0 0 0 / 74%);
  height: 255px;
  width: 450px;
  background-color: var(--aliceblue);
  border-radius: 10px;
  margin-bottom: 10px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  /*********************************/
  .flip-card {
    width: 450px;
    height: 255px;
    perspective: 2000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    border-radius: 28px;
    transition: all 550ms cubic-bezier(0.1, 0.22, 0.8, 1.13);
    transform-style: preserve-3d;
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 93%;
    height: 100%;
    backface-visibility: hidden;
  }
  .flip-card-front {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .flip-card-back {
    display: grid;
    place-items: center;
    padding: 32px;
    border-radius: 60px;
    transform: rotateY(180deg);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(-180deg);
  }

  .p-back {
    padding-left: 5%;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
  @media screen and (max-width: 588px) and (min-width: 250px) {
    .container-p-back {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: small;
      margin-right: 50%;
    }
  }
`;

export const Image = styled.div`
  img {
    max-width: 450px;
  }
  @media screen and (max-width: 640px) and (min-width: 588px) {
    img {
      width: 100%;
      height: 100%;
      margin-left: 2%;
    }
  }
  @media screen and (max-width: 588px) and (min-width: 500px) {
    img {
      margin-left: -12%;
      width: 350px;
      height: 180px;
    }
  }
  @media screen and (max-width: 500px) and (min-width: 386px) {
    img {
      margin-left: -31%;
      width: 250px;
      height: 180px;
    }
  }
  @media screen and (max-width: 386px) and (min-width: 250px) {
    img {
      margin-left: -40%;
      width: 200px;
      height: 180px;
    }
  }
`;
