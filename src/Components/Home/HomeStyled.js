import styled from "styled-components";

export const Container = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr; */
  /* grid-template-rows: repeat(2, 1fr); */
  /* grid-column-gap: 20px; */
  /* grid-row-gap: 30px; */
`;

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
    margin-left: -20%;
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
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 10%;
    font-size: medium;
    @media (max-width: 500px) {
      @media (min-width: 200px) {
        font-size: small;
      }
    }
  }
`;
