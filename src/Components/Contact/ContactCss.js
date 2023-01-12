import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 12px;
  box-shadow: 0 2.5px 7.5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  padding: 1em 3em;
  text-align: center;
  margin-left: -26%;
  .disabled {
    /* color: rgba(19, 1, 1, 0.3); */
    color: green;
    /* background-color: rgba(19, 1, 1, 0.3); */
    background-color: blue;
  }
`;

export const Name = styled.div`
  margin-top: 2%;
  margin-left: -18%;
  label {
    position: absolute;
    line-height: 5px;
  }
  input {
    background-color: #fff;
    border: none;
    border-radius: 12px;
    box-shadow: var(--shadow);
    margin: 1em 0;
    padding: 1em;
    outline: none;
  }

  p.danger {
    color: red;
    font-size: 15px;
    line-height: 0;
    margin-top: -2px;
    margin-bottom: 2%;
  }

  input.danger {
    border: 2px solid red;
  }
  @media (max-width: 410px) and (min-width: 250px) {
    margin-left: 0%;
  }
`;
export const Email = styled.div`
  margin-left: -18%;
  label {
    position: absolute;
    line-height: 5px;
  }
  input {
    background-color: #fff;
    border: none;
    border-radius: 12px;
    box-shadow: var(--shadow);
    margin: 1em 0;
    padding: 1em;
    outline: none;
  }
  p.danger {
    color: red;
    font-size: 15px;
    line-height: 0;
    margin-top: -2px;
    margin-bottom: 2%;
  }

  input.danger {
    border: 2px solid red;
  }
  @media (max-width: 410px) and (min-width: 250px) {
    margin-left: 0%;
  }
`;
export const Message = styled.div`
  label {
    position: absolute;
    line-height: 5px;
    margin-left: -10%;
  }
  textarea {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: var(--shadow);
    margin: 1em 0;
    padding: 1em;
    border: none;
    width: 261px;
    height: 83px;
    margin-left: -10%;
    outline: none;
  }
  p.danger {
    color: red;
    font-size: 15px;
    line-height: 0;
    margin-top: -0%;
    margin-left: -20%;
  }

  textarea.danger {
    border: 2px solid red;
  }

  @media (max-width: 1264px) and (min-width: 1112px) {
    margin-left: 2%;
  }

  @media (max-width: 1111px) and (min-width: 768px) {
    margin-left: 5%;
  }
  @media (max-width: 768px) and (min-width: 585px) {
    margin-left: 8%;
  }
  @media (max-width: 584px) and (min-width: 410px) {
    margin-left: 10%;
  }
  @media (max-width: 410px) and (min-width: 250px) {
    margin-left: 0%;
    textarea {
      width: 160px;
    }
  }
`;

export const Text = styled.h3`
  margin-left: -5.5%;
  height: 50px;
  margin-right: -5.5%;
  h2 {
    padding: 3% 5%;
  }
  @media (max-width: 768px) {
    font-size: medium;
    text-align: center;
  }
`;
