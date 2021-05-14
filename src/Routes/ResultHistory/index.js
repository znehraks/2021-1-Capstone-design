import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Animation02 = keyframes`
0% {
    opacity:0
}
50%{
  opacity:0
}
100%{
    opacity:1
}
`;
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
`;
const TitleSpan = styled.span`
  font-size: 3vw;
  margin-bottom: 5vw;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3vw 0;
`;

const Container = styled.div`
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2vw 0.5px;
  animation: ${Animation02} 0.5s linear;
`;

const RightTopContainer = styled(Link)`
  width: 20vw;
  height: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 2vw;
  margin-bottom: 2vw;
  transition-duration: 0.3s;
  :hover {
    color: ${(props) => props.theme.headerBgColor};
    border: 3px solid ${(props) => props.theme.headerBgColor};
  }
`;
const ContentSpan = styled.span`
  font-size: 2vw;
`;
const ContentSmallSpan = styled.span`
  margin-top: 1vw;
  font-size: 0.9vw;
`;
const ResultHistory = () => {
  return (
    <>
      <Helmet>
        <title>History</title>
      </Helmet>
      <Wrapper>
        <Article>
          <ContentContainer>
            <TitleSpan>내 추천이력 조회하기</TitleSpan>
            <Container>
              <RightTopContainer to="/DIYHistory">
                <ContentSpan>DIY 방식</ContentSpan>
                <ContentSmallSpan>DIY 방식으로 추천 받은</ContentSmallSpan>
                <ContentSmallSpan>이력을 조회합니다.</ContentSmallSpan>
              </RightTopContainer>
              <RightTopContainer to="/StudentHistory">
                <ContentSpan>학우들의 선택</ContentSpan>
                <ContentSmallSpan>학우들의 선택으로 추천 받은</ContentSmallSpan>
                <ContentSmallSpan>이력을 조회합니다.</ContentSmallSpan>
              </RightTopContainer>
              <RightTopContainer to="/DeveloperHistory">
                <ContentSpan>제작자's pick</ContentSpan>
                <ContentSmallSpan>제작자가 선별로 추천 받은</ContentSmallSpan>
                <ContentSmallSpan>이력을 조회합니다.</ContentSmallSpan>
              </RightTopContainer>
            </Container>
          </ContentContainer>
        </Article>
      </Wrapper>
    </>
  );
};

export default ResultHistory;
