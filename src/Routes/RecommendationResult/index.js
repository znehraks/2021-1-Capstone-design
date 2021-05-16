import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Api } from "../../api";
import StarChart from "../../components/Visualization/StarChart";
import StarChart02 from "../../components/Visualization/StarChart02";
import Pie from "../../components/Visualization/Pie";
import Bar from "../../components/Visualization/Bar";
import Line from "../../components/Visualization/Line";
import Doughnut from "../../components/Visualization/Doughnut";
import Loader from "../../components/Loader";
import Map from "../../components/Kakao/Map";
import Arrow from "../../components/Arrow";
import Back from "../../components/Styles/images/back.png";
import Magnify from "../../components/Styles/images/magnify.png";
import { Helmet } from "react-helmet";
import RadarArticle from "../../components/Visualization/RadarArticle";
import Wordcloud from "../../components/Visualization/Wordcloud";
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
  height: 37vw;
  margin-top: 2vw;
`;

const ArticleContentContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const RightContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

const DetailArticle = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}` : `45vw`)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  font-size: 1.5vw;
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
const RightFloatingDiv02 = styled.div`
  width: 5vw;
  height: 5vw;
  position: absolute;
  top: 8vw;
  right: 15vw;
  cursor: pointer;
  display: ${(props) => (props.isClicked ? `none` : `flex`)};
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
  font-size: 2vw;
  margin-top: 2vw;
  margin-bottom: 1vw;
`;
const TitleSpan02 = styled.span`
  font-size: 2vw;
  margin-top: 6vw;
  margin-bottom: 1vw;
`;
const TitleSpan03 = styled.span`
  font-size: 2vw;
  margin-top: 1vw;
  margin-bottom: 4vw;
`;
const SubTitleSpan = styled.span`
  font-size: 0.9vw;
  margin-top: 0.3vw;
`;

const RecommendationResult = withRouter(
  ({
    match: {
      params: {
        univ_name,
        univ_lat,
        univ_lon,
        Q2Answer,
        Q3Answer,
        Q4Answer,
        Q5Answer,
        w1,
        w2,
        w3,
        w4,
        w5,
      },
    },
    setDetail,
  }) => {
    const [data, setData] = useState();
    const [newData, setNewData] = useState();
    const [hashtags, setHashtags] = useState();
    const [isClicked, setIsClicked] = useState("");
    const [isHovered, setIsHovered] = useState("");
    const [count, setCount] = useState(0);
    console.log(newData);
    useEffect(() => {
      if (count == 1) {
        const hashtagsTemp = [];
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < data[i].rooms_hash_tags.length; j++) {
            hashtagsTemp.push(data[i].rooms_hash_tags[j]);
          }
        }
        setHashtags(hashtagsTemp.sort());
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
        console.log(hashtags);
        return;
      }
      Api.getResidence(
        univ_name,
        univ_lon,
        univ_lat,
        Q2Answer,
        Q3Answer,
        Q4Answer,
        Q5Answer,
        w1,
        w2,
        w3,
        w4,
        w5
      ).then((response) => {
        const json = JSON.parse(response.data);
        setData(json);
        console.log(json);
        setCount(count + 1);
      });
    }, [count, isClicked, isHovered]);
    //weightcode 바탕으로
    console.log(w1);
    console.log(w2);
    console.log(w3);
    console.log(w4);
    console.log(w5);

    console.log(isClicked);
    console.log(data);
    if (!data) {
      console.log(data);
    }
    //로딩중 화면 추가
    //시각화 간단히 추가해보기
    //지도에 마크업해주고 이 지역에 사시면 00개의 카페, 00개의 공원을 이용하기 편리하고, 덤으로 맥도날드도 가깝군요! 등등 문구 추천

    //초반에 성별이나 나이도 받아도 될듯(선택)
    return (
      <>
        <Helmet>
          <title>Result</title>
        </Helmet>
        <Wrapper>
          {data && (
            <>
              <>
                <RightFloatingDiv02 isClicked={isClicked}>
                  <BackArrow>
                    <img onClick={() => setDetail(false)} src={Back}></img>
                    <OptionSpan>뒤로가기</OptionSpan>
                  </BackArrow>
                </RightFloatingDiv02>
                <TitleSpan>나의 "{univ_name}"주변 추천 자취지역 Top5</TitleSpan>
                <SubTitleSpan>
                  마커에 마우스를 올리시면 해당 지역과 평균을 비교할 수
                  있습니다.
                </SubTitleSpan>
                <SubTitleSpan>
                  마커를 클릭하면 해당 지역의 상세정보를 확인할 수 있습니다.
                </SubTitleSpan>
                <Article>
                  <ArticleContentContainer>
                    <LeftContainer>
                      <Map
                        setIsHovered={setIsHovered}
                        setIsClicked={setIsClicked}
                        data={data}
                        univ_lat={univ_lat}
                        univ_lon={univ_lon}
                      />
                    </LeftContainer>

                    <RightContainer>
                      <RadarArticle
                        data={newData}
                        isHovered={isHovered}
                        isClicked={isClicked}
                      />
                    </RightContainer>
                  </ArticleContentContainer>
                </Article>{" "}
                <DetailArticle>
                  <TitleSpan02>추천받은 상위 5개 지역의 총점</TitleSpan02>
                  <DetailItemContainer>
                    <DetailItem>
                      <DetailTitleSpan>1위 지역</DetailTitleSpan>
                      <Bar input={data} />
                      <Arrow
                        height={window.innerHeight + window.innerHeight - 100}
                      />
                    </DetailItem>
                  </DetailItemContainer>
                </DetailArticle>
              </>
              {hashtags && (
                <DetailArticle>
                  <TitleSpan03>선택된 지역의 추천 매물정보</TitleSpan03>
                  <SubTitleSpan>
                    선택된 지역과 관련있는 키워드입니다.
                  </SubTitleSpan>
                  <DetailItemContainer>
                    <DetailItem>
                      <Wordcloud hashtags={hashtags} />
                    </DetailItem>
                    <DetailItem></DetailItem>
                  </DetailItemContainer>
                </DetailArticle>
              )}
            </>
          )}
          {!data && (
            <Article>
              <Loader />
            </Article>
          )}
        </Wrapper>
      </>
    );
  }
);

export default RecommendationResult;
