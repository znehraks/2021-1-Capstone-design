import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Api } from "../../api";
import StarChart from "../../components/Visualization/StarChart";
import StarChartData from "../../components/Visualization/StarChartData";
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

const RadarArticle = styled.div`
  width: 100%;
  height: 50vh;
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

const RecommendationResult = () => {
  // const [data, setData] = useState();
  const univ_name = "한국대학교";
  const univ_lat = 37.5459469;
  const univ_lon = 126.9645778;
  const Q2Answer = 1000;
  const w1 = 21.5;
  const w2 = 19.5;
  const w3 = 12.5;
  const w4 = 20;
  const w5 = 27.5;

  const data = [
    {
      T1: 29,
      T2: 5,
      T3: 17,
      T4: 4,
      T5: 11,
      lat: 37.54533171,
      lgeo: "21221012032",
      lon: 126.96741253,
      rank: 1,
      total_weight: 66,
    },
    {
      T1: 27,
      T2: 1,
      T3: 17,
      T4: 4,
      T5: 10,
      lat: 37.54895548,
      lgeo: "21221012210",
      lon: 126.96744361,
      rank: 2,
      total_weight: 59,
    },
    {
      T1: 20,
      T2: 8,
      T3: 17,
      T4: 4,
      T5: 8,
      lat: 37.54453956,
      lgeo: "21221012033",
      lon: 126.9721917,
      rank: 3,
      total_weight: 58,
    },
    {
      T1: 24,
      T2: 5,
      T3: 17,
      T4: 4,
      T5: 5,
      lat: 37.54103374,
      lgeo: "21221012021",
      lon: 126.96429444,
      rank: 4,
      total_weight: 57,
    },
    {
      T1: 30,
      T2: 0,
      T3: 17,
      T4: 4,
      T5: 3,
      lat: 37.5472749,
      lgeo: "21221012201",
      lon: 126.9650988,
      rank: 5,
      total_weight: 55,
    },
  ];

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
          <RadarArticle>
            <StarChart data={data} />
          </RadarArticle>
          <Article>
            <TitleSpan>"{univ_name}"의 선택된 반영률</TitleSpan>
            <Doughnut w1={w1} w2={w2} w3={w3} w4={w4} w5={w5} />
          </Article>
          <Article>
            <TitleSpan>"{univ_name}"의 추천 1위 매물의 가중치 비율</TitleSpan>
            <Doughnut
              w1={data[0].T1}
              w2={data[0].T2}
              w3={data[0].T3}
              w4={data[0].T4}
              w5={data[0].T5}
            />
          </Article>
          <Article>
            <TitleSpan>"{univ_name}"의 추천 2위 매물의 가중치 비율</TitleSpan>
            <Doughnut
              w1={data[1].T1}
              w2={data[1].T2}
              w3={data[1].T3}
              w4={data[1].T4}
              w5={data[1].T5}
            />
          </Article>
          <Article>
            <TitleSpan>"{univ_name}"의 추천 3위 매물의 가중치 비율</TitleSpan>
            <Doughnut
              w1={data[2].T1}
              w2={data[2].T2}
              w3={data[2].T3}
              w4={data[2].T4}
              w5={data[2].T5}
            />
          </Article>
          <Article>
            <TitleSpan>"{univ_name}"의</TitleSpan>
            <Line />
          </Article>
          <Article>
            <Map data={data} univ_lat={univ_lat} univ_lon={univ_lon} />
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
};

export default RecommendationResult;
