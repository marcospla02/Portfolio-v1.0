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

  a {
    margin-bottom: 50px;
  }

  @media (min-width: 300px) and (max-width: 386px) {
    p {
      margin-right: 10%;
    }
  }

  /*********************************/
  .flip-card {
    /* width: 450px; */
    width: auto;
    /* width: 45px; */
    height: 255px;
    perspective: 2000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    /* height: 0%; */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    /* border-radius: 28px; */
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
    /* width: 400px;
    right: -10px; */
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(-180deg);
  }

  .p-back {
    padding-left: 5%;
    margin-top: -5%;
    width: 100%;
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
      /* margin-right: 50%; */
    }
    .p-back {
      margin-left: 25px;
      height: 150px;
    }
  }
`;

export const Image = styled.div`
  img {
    max-width: 450px;
    /*     max-width: 450px;
    margin-left: 5px;
     */
    height: 200px;
  }
  @media screen and (max-width: 640px) and (min-width: 588px) {
    img {
      width: 420px;
      /* width: 100%; */
      height: 100%;
      /* margin-left: 2%; */
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
      /* margin-left: -31%; */
      width: 250px;
      height: 180px;
    }
  }
  @media screen and (max-width: 386px) and (min-width: 250px) {
    img {
      /* margin-left: -50%; */
      width: 200px;
      height: 180px;
    }
  }

  @media (min-width: 300px) and (max-width: 386px) {
    img {
      width: 230px;
      /* margin-right: -10%; */
    }
  }
`;

export const Video = styled.div`
  video {
    height: 200px;
    max-width: 450px;
  }

  @media screen and (max-width: 640px) and (min-width: 588px) {
    video {
      width: 420px;
      height: 100%;
    }
  }
  @media screen and (max-width: 588px) and (min-width: 500px) {
    video {
      margin-left: -12%;
      width: 350px;
      height: 180px;
    }
  }
  @media screen and (max-width: 500px) and (min-width: 386px) {
    video {
      width: 250px;
      height: 180px;
    }
  }
  @media screen and (max-width: 386px) and (min-width: 250px) {
    video {
      width: 200px;
      height: 180px;
    }
  }

  @media (min-width: 300px) and (max-width: 386px) {
    video {
      width: 230px;
    }
  }
`;
