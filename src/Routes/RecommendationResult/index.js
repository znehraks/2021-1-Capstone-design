import React from "react";
import { Link, useLocation, withRouter } from "react-router-dom";
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: red;
`;

const TitleSpan = styled.span`
  font-size: 2.5vw;
  margin-top: 5vw;
`;

const RecommendationResult = withRouter(
  ({
    match: {
      params: { Q1Answer, Q2Answer, weightcode },
    },
  }) => {
    //weightcode 바탕으로
    console.log(weightcode.split(",")[0]);
    console.log(weightcode.split(",")[1]);
    console.log(weightcode.split(",")[2]);
    console.log(weightcode.split(",")[3]);
    console.log(weightcode.split(",")[4]);
    return (
      <Wrapper>
        <Article>
          <TitleSpan>"{Q1Answer}"의</TitleSpan>
          <TitleSpan>"{Q2Answer}m" 이내의</TitleSpan>
          <TitleSpan>"{weightcode}"가중치를 바탕으로 구해야함</TitleSpan>
        </Article>
      </Wrapper>
    );
  }
);

export default RecommendationResult;
