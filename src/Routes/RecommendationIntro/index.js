import React, { useState } from "react";
import { Helmet } from "react-helmet";
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
  background: ${(props) => props.theme.bgColor};
  @media (max-width: 500px) {
    height: 100vh;
  }
`;

const Article = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    height: 100vh;
  }
`;

const StartButton = styled(Link)`
  width: 25vw;
  height: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5vw 0;
  border: 1vw solid black;
  transition-duration: 0.4s;
  :hover {
    color: ${(props) => props.theme.headerBgColor};
    border: 1vw solid ${(props) => props.theme.headerBgColor};
  }
  @media (max-width: 500px) {
    width: 50vw;
    height: 50vw;
  }
`;

const StartTitleSpan = styled.span`
  font-size: 2vw;
  @media (max-width: 500px) {
    font-size: 4vw;
  }
`;
const StartContentSpan = styled.span`
  font-size: 1.2vw;
  @media (max-width: 500px) {
    font-size: 3.5vw;
  }
`;

const Article02 = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
  }
`;

const SpanBox = styled.div`
  width: 46vw;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 500px) {
    width: 70vw;
    height: 45vw;
  }
`;
const TitleSpan = styled.span`
  font-size: 3vw;
  margin-bottom: 3vw;
  @media (max-width: 500px) {
    font-size: 4vw;
  }
`;
const ContentSpan = styled.span`
  font-size: 2vw;
  margin-bottom: 1vw;
  @media (max-width: 500px) {
    font-size: 3vw;
  }
`;

const ButtonBox = styled.div`
  width: 46vw;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 500px) {
    height: 10vw;
  }
`;

const Button = styled(Link)`
  padding: 1vw;
  border: 2px solid rgba(0, 0, 0, 0.4);
  font-size: 1.2vw;
  :hover {
    color: white;
    font-weight: 800;
    background: black;
  }
  @media (max-width: 500px) {
    font-size: 4vw;
  }
`;

const RecommendationIntro = () => {
  const [mode, setMode] = useState("intro");
  return (
    <>
      <Helmet>
        <title>Intro</title>
      </Helmet>
      <Wrapper>
        {mode === "intro" && (
          <Article>
            <StartButton
              onClick={() => {
                setMode("desc");
              }}
            >
              <StartTitleSpan>?????? ?????? ?????? ????????????</StartTitleSpan>
              <StartContentSpan>?????? ????????? ??????!</StartContentSpan>
            </StartButton>
          </Article>
        )}
        {mode === "desc" && (
          <Article02>
            <SpanBox>
              <TitleSpan>?????? ?????? ???????????????.</TitleSpan>
              <ContentSpan>1. ?????? ?????? ????????? ????????? ?????????. </ContentSpan>
              <ContentSpan>2. ????????? ?????? ????????? ????????? ?????????.</ContentSpan>
              <ContentSpan>
                3. ?????? ?????? ???????????? ????????? 1??? ???????????????.
              </ContentSpan>
              <ContentSpan>
                4. ??? ????????? ?????? ???????????? ????????? 1??? ???????????????.
              </ContentSpan>
              <ContentSpan>
                5. ??? ????????? ?????? ???????????? ????????? 1??? ???????????????.
              </ContentSpan>
              <ContentSpan>6. ????????? ???????????? ???.</ContentSpan>
            </SpanBox>
            <ButtonBox>
              <Button to="/Recommendation">????????????</Button>
            </ButtonBox>
          </Article02>
        )}
      </Wrapper>
    </>
  );
};

export default RecommendationIntro;
