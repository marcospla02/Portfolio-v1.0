import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 4%;
  padding-bottom: 1%;
  padding: 0% 5% 0% 5%;
`;

export const Container = styled.div`
  overflow-y: scroll;
  height: 88vh;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--aliceblue);
    border-radius: 12px;
  }
`;
