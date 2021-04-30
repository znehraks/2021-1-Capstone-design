import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Api } from "../../api";
import Bar from "../../components/Visualization/Bar";
import Line from "../../components/Visualization/Line";
import Doughnut from "../../components/Visualization/Doughnut";
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
      params: { Q1Answer, Q2Answer, w1, w2, w3, w4, w5 },
    },
  }) => {
    const [data, setData] = useState();

    useEffect(() => {
      Api.getResidence(Q1Answer, Number(Q2Answer), w1, w2, w3, w4, w5).then(
        (response) => {
          setData(response.data);
          console.log(response.data);
        }
      );
    }, []);
    //weightcode 바탕으로
    console.log(w1);
    console.log(w2);
    console.log(w3);
    console.log(w4);
    console.log(w5);

    if (!data) {
      console.log(data);
    }
    //로딩중 화면 추가
    //시각화 간단히 추가해보기
    //지도에 마크업해주고 이 지역에 사시면 00개의 카페, 00개의 공원을 이용하기 편리하고, 덤으로 맥도날드도 가깝군요! 등등 문구 추천

    return (
      <Wrapper>
        <Article>
          <TitleSpan>"{Q1Answer}"의</TitleSpan>
          <Doughnut />
        </Article>
      </Wrapper>
    );
  }
);

export default RecommendationResult;
