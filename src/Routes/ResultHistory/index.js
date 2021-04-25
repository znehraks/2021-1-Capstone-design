import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin-top: 6vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

const Article = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: red;
`;

const StartButton = styled(Link)`
  width: 32vw;
  height: 32vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5vw 0;
  border: 1vw solid rgba(0, 0, 0, 0.4);
  :hover {
    color: #fff;
    border: 1vw solid rgba(0, 0, 0, 0.4);
  }
`;

const StartTitleSpan = styled.span`
  font-size: 3vw;
`;
const StartContentSpan = styled.span`
  font-size: 2vw;
`;

const ResultHistory = () => {
  return (
    <Wrapper>
      <Article>
        <StartTitleSpan>아직 안했습니다~</StartTitleSpan>
      </Article>
    </Wrapper>
  );
};

export default ResultHistory;
