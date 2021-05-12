import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Api } from "../../api";
import StarChart from "../../components/Visualization/StarChart";
import Pie from "../../components/Visualization/Pie";
import Bar from "../../components/Visualization/Bar";
import Line from "../../components/Visualization/Line";
import Doughnut from "../../components/Visualization/Doughnut";
import Loader from "../../components/Loader";
import Map from "../../components/Kakao/Map";
import Arrow from "../../components/Arrow";
import Back from "../../components/Styles/images/back.png";
import Magnify from "../../components/Styles/images/magnify.png";

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
  margin: 6vw 0;
  width: 100%;
  height: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RadarArticle = styled.div`
  margin: 6vw 0;
  width: 50%;
  height: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailArticle = styled.div`
  margin: 6vw 0;
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}` : `45vw`)};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const DetailItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const DetailItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DetailTitleSpan = styled.span`
  font-size: 2vw;
`;
const DetailContentSpan = styled.span`
  font-size: 1.2vw;
`;
const RightFloatingDiv = styled.div`
  width: 5vw;
  height: 5vw;
  position: absolute;
  top: 11vw;
  right: 30vw;
  cursor: pointer;
  display: ${(props) => (props.isClicked ? `flex` : `none`)};
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const BackArrow = styled.div`
  width: 3vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 2vw;
  }
`;
const MagnifyDiv = styled.div`
  width: 4vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 3vw;
  }
`;

const OptionSpan = styled.span`
  font-size: 0.5vw;
`;

const TitleSpan = styled.span`
  font-size: 2.5vw;
`;
const SubTitleSpan = styled.span`
  font-size: 1vw;
  margin: 1vw 0;
`;
const RecommendationResult = withRouter(
  ({
    match: {
      params: { univ_name, univ_lat, univ_lon, Q2Answer, w1, w2, w3, w4, w5 },
    },
  }) => {
    const [data, setData] = useState();
    const [newData, setNewData] = useState();
    const [isClicked, setIsClicked] = useState(false);

    window.scrollTo(0, 0);
    useEffect(() => {
      if (data) {
        const temp = [
          {
            weight: "거리",
            "1위": data[0].T1,
            "2위": data[1].T1,
            "3위": data[2].T1,
            "4위": data[3].T1,
            "5위": data[4].T1,
            평균: Math.round(data[0].T1_avg),
          },
          {
            weight: "역세권",
            "1위": data[0].T2,
            "2위": data[1].T2,
            "3위": data[2].T2,
            "4위": data[3].T2,
            "5위": data[4].T2,
            평균: Math.round(data[0].T2_avg),
          },
          {
            weight: "가성비",
            "1위": data[0].T3,
            "2위": data[1].T3,
            "3위": data[2].T3,
            "4위": data[3].T3,
            "5위": data[4].T3,
            평균: Math.round(data[0].T3_avg),
          },
          {
            weight: "안전",
            "1위": data[0].T4,
            "2위": data[1].T4,
            "3위": data[2].T4,
            "4위": data[3].T4,
            "5위": data[4].T4,
            평균: Math.round(data[0].T4_avg),
          },
          {
            weight: "매물",
            "1위": data[0].T5,
            "2위": data[1].T5,
            "3위": data[2].T5,
            "4위": data[3].T5,
            "5위": data[4].T5,
            평균: Math.round(data[0].T5_avg),
          },
        ];
        setNewData(temp);
      }
      Api.getResidence(
        univ_name,
        univ_lat,
        univ_lon,
        Q2Answer,
        w1,
        w2,
        w3,
        w4,
        w5
      ).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }, [isClicked]);
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
            <RightFloatingDiv isClicked={isClicked}>
              <BackArrow>
                <img onClick={() => setIsClicked(false)} src={Back}></img>
                <OptionSpan>뒤로가기</OptionSpan>
              </BackArrow>
              {/* <MagnifyDiv>
              <img src={Magnify}></img>
              <OptionSpan>알고리즘</OptionSpan>
            </MagnifyDiv> */}
            </RightFloatingDiv>
            {isClicked ? (
              <>
                <RadarArticle>
                  <TitleSpan>내가 선택한 지역과 평균과의 비교</TitleSpan>
                  <SubTitleSpan>
                    차트를 누르면 이전 지도로 돌아갑니다.
                  </SubTitleSpan>
                  <TitleSpan></TitleSpan>
                  <StarChart data={newData} isClicked={isClicked} />
                  <Arrow />
                </RadarArticle>
                <DetailArticle>
                  <TitleSpan>내가 선택한 1,2,3위 지역 심층 분석</TitleSpan>
                  <DetailItemContainer>
                    <DetailItem>
                      <DetailTitleSpan>1위 지역</DetailTitleSpan>
                      <Pie input={data} number={0} />
                    </DetailItem>
                    <DetailItem>
                      <DetailTitleSpan>2위 지역</DetailTitleSpan>
                      <Pie input={data} number={1} />
                    </DetailItem>
                    <DetailItem>
                      <DetailTitleSpan>3위 지역</DetailTitleSpan>
                      <Pie input={data} number={2} />
                    </DetailItem>
                  </DetailItemContainer>
                </DetailArticle>
              </>
            ) : (
              <>
                <DetailArticle height={"32vw"}>
                  <TitleSpan>추천받은 상위 5개 지역의 총점</TitleSpan>
                  <DetailItemContainer>
                    <DetailItem>
                      <DetailTitleSpan>1위 지역</DetailTitleSpan>
                      <Bar input={data} />
                      <Arrow />
                    </DetailItem>
                  </DetailItemContainer>
                </DetailArticle>
                <Article>
                  <TitleSpan>나의 추천 자취지역 Top5</TitleSpan>
                  <SubTitleSpan>
                    마커를 누르시면 해당 지역의 상세정보를 볼 수 있습니다.
                  </SubTitleSpan>
                  <Map
                    setIsClicked={setIsClicked}
                    data={data}
                    univ_lat={univ_lat}
                    univ_lon={univ_lon}
                  />
                </Article>{" "}
              </>
            )}
            <Article>
              <TitleSpan>"{univ_name}"의</TitleSpan>
              <Line />
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
