import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Api } from "../../api";
import Bar from "../../components/Visualization/Bar";
import Line from "../../components/Visualization/Line";
import Doughnut from "../../components/Visualization/Doughnut";
import Loader from "../../components/Loader";
import Map from "../../components/Kakao/Map";
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

    //초반에 성별이나 나이도 받아도 될듯(선택)
    return (
      <Wrapper>
        {data && (
          <>
            <Article>
              <TitleSpan>"{Q1Answer}"의 선택된 반영률</TitleSpan>
              <Doughnut w1={w1} w2={w2} w3={w3} w4={w4} w5={w5} />
            </Article>
            <Article>
              <TitleSpan>"{Q1Answer}"의 추천 1위 매물의 가중치 비율</TitleSpan>
              <Doughnut
                w1={data[0].T1}
                w2={data[0].T2}
                w3={data[0].T3}
                w4={data[0].T4}
                w5={data[0].T5}
              />
            </Article>
            <Article>
              <TitleSpan>"{Q1Answer}"의 추천 2위 매물의 가중치 비율</TitleSpan>
              <Doughnut
                w1={data[1].T1}
                w2={data[1].T2}
                w3={data[1].T3}
                w4={data[1].T4}
                w5={data[1].T5}
              />
            </Article>
            <Article>
              <TitleSpan>"{Q1Answer}"의 추천 3위 매물의 가중치 비율</TitleSpan>
              <Doughnut
                w1={data[2].T1}
                w2={data[2].T2}
                w3={data[2].T3}
                w4={data[2].T4}
                w5={data[2].T5}
              />
            </Article>
            <Article>
              <TitleSpan>"{Q1Answer}"의</TitleSpan>
              <Line />
            </Article>
            <Article>
              <Map />
            </Article>
          </>
        )}
        {!data && (
          <Article>
            <Loader />
          </Article>
        )}
      </Wrapper>
    );
  }
);

export default RecommendationResult;
