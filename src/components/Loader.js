import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "./Styles/images/logo.PNG";

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
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${Animation} 1.3s linear infinite;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 999;
`;

const Img = styled.img`
  width: 20vw;
`;

export default () => (
  <Loader>
    <Img src={logo} />
  </Loader>
);
