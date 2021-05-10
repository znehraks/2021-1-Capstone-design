import React from "react";
import styled, { keyframes } from "styled-components";
import Arrow from "./Styles/images/arrow_v.png";

const Animation = keyframes`
    0% {
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0;
    }
`;

const Loader = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Animation} 1s linear infinite;
  text-align: center;
  cursor: pointer;
`;

const Img = styled.img`
  bottom: -20vw;
  width: 8vw;
  position: absolute;
  left: -3;
`;

export default () => (
  <Loader
    onClick={() => {
      window.scrollTo(window.innerHeight, window.innerHeight);
    }}
  >
    <Img src={Arrow} />
  </Loader>
);
