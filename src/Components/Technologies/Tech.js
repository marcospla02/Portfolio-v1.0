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
  left: 3%;
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
`;

/************************************************/
// export const Lenguaje = styled.div`
//   position: absolute;
//   left: 70%;
//   top: 55%;
//   .lenguaje {
//     position: absolute;
//     top: -50%;
//   }
// `;

// export const Front = styled.div`
//   position: fixed;
//   margin-bottom: 5%;
//   left: 10%;
//   top: 55%;
//   .front {
//     position: absolute;
//     top: -52%;
//   }
// `;

// export const Back = styled.div`
//   position: fixed;
//   right: 60%;
//   top: 75%;
//   .back {
//     position: absolute;
//     top: -35%;
//   }
// `;
