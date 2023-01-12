import styled from "styled-components";

export const NavContainer = styled.nav`
  h2 {
    color: #205295;
    font-weight: 400;
    padding-left: 25px;
  }
  padding: 0.5rem;
  background-color: var(--light-grey);
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #205295;
    text-decoration: none;
    margin-right: 1rem;
    padding: 0.5%;
    transition: all 1s;
  }
  a:hover {
    display: inline-block;
    position: relative;
  }
  a::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.35s ease-out;
  }
  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  .invisible {
    opacity: 0;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    /* transition: all 0.8s ease; */
    transition: all 0.8s ease-in-out;
    a {
      color: #205295;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      margin-bottom: -25px;
      /* margin-right: 25px; */
      padding-right: 25px;
      a {
        font-size: 1.5rem;
        color: #205295;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 14%;
    /* top: 4.8%; */
    left: 0;
    right: 0;
    background-color: #000;
    text-align: center;
    height: 300px;
    width: 100%;
    border-bottom-right-radius: 250px;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const BgDiv = styled.div`
  background-color: #222;
  /* background-color: var(--light-blue); */
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;
  &.active {
    border-radius: 0 0 90% 0;
    transition: all 0.7s ease;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
  }
`;
