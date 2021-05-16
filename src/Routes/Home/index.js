import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import homeEx from "../../components/Styles/images/homeEx.png";
import homeEx3 from "../../components/Styles/images/homeEx3.jpg";
import homeEx4 from "../../components/Styles/images/homeEx4.jpg";
import homeEx5 from "../../components/Styles/images/homeEx5.jpg";
import homeEx6 from "../../components/Styles/images/homeEx6.jpg";
import SliderComponent from "../../components/Slider";
import Arrow from "../../components/Arrow";
import { Helmet } from "react-helmet";

const Animation01 = keyframes`
    0% {
        opacity:0
    }
    100%{
        opacity:1
    }
`;
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
  min-height: 45vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding-top: 6vw;
`;
const SquareDiv = styled.div`
  position: relative;
  width: 50vw;
  height: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.theme.mobileMaxWidth}) {
    width: 73.5vw;
    height: 35vw;
  }
`;

const BlackSquare01 = styled.div`
  position: absolute;
  top: 0;
  left: 5%;
  width: 95%;
  height: 90%;
  background: transparent;
  border: 4px solid black;
`;
const BlackSquare02 = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 95%;
  height: 90%;
  background: transparent;
  border: 4px solid black;
`;

const ArrowDiv = styled(Arrow)`
  position: absolute;
  bottom: 0;
  left: 0;
`;
const Article = styled.div`
  width: 100vw;
  height: 45vw;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.justify ? `flex-start` : `center`)};
  align-items: center;
  background: ${(props) => (props.bgColor ? `${props.bgColor}` : `#fafafa`)};
`;

const Slider = styled(SliderComponent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vw;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleSpan = styled.span`
  font-size: 3vw;
  margin-bottom: 2vw;
  animation: ${Animation01} 0.5s linear;
`;
const MediumSpan = styled.span`
  font-size: 1.2vw;
`;
const SlowTitleSpan = styled.span`
  font-size: 3vw;
  animation: ${Animation02} 1s linear;
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
  animation: ${Animation02} 1s linear;
`;
const ColumnContainer = styled.div`
  width: 50%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? `flex-start` : `center`)};
  align-items: center;
  margin: 2vw 0.5px;
  animation: ${Animation02} 1s linear;
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
const VerticalLine = styled.div`
  position: absolute;
  top: 52vw;
  left: 20vw;
  width: 15vw;
  height: 48vw;
  padding: 1vw;
  background: ${(props) => props.theme.headerBgColor};
`;
const LeftContainer = styled.div`
  width: 40vw;
  height: 45vw;
`;
const ImgContainer = styled.div`
  width: 50%;
  height: 90%;
`;
const Img = styled.img`
  width: 100%;
  height: auto;
`;
const RightContainer = styled.div`
  width: 60vw;
  height: 45vw;
  padding: 15vw 5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const HorizontalLine = styled.div`
  width: 25vw;
  height: 5px;
  margin: 1vw 0;
  background: ${(props) => props.theme.headerBgColor};
`;
const TitleSpan02 = styled.span`
  font-size: 2.4vw;
`;
const SubTitleSpan02 = styled.span`
  font-size: 1.5vw;
  margin-bottom: 1vw;
`;
const ContentSpan02 = styled.span`
  font-size: 1.2vw;
  margin-bottom: 0.6vw;
`;
const Blank = styled.div`
  margin: 1vw 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const MoreSpan = styled(Link)`
  font-size: 1.2vw;
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 0.6vw 0.8vw;
  cursor: pointer;
  :hover {
    color: white;
    background: black;
  }
`;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Wrapper>
        <Article>
          <ContentContainer>
            <SquareDiv>
              <TitleContainer>
                <TitleSpan>오직 나를 위한 맞춤형 자취지역.</TitleSpan>
                <SlowTitleSpan>저기어때.</SlowTitleSpan>
              </TitleContainer>
              <BlackSquare01 />
              <BlackSquare02 />
            </SquareDiv>
            <ArrowDiv height={window.innerHeight} />
          </ContentContainer>
        </Article>
        <Article justify={"flex-start"}>
          <VerticalLine></VerticalLine>
          <LeftContainer>
            <ImgContainer>
              <Img></Img>
            </ImgContainer>
          </LeftContainer>
          <RightContainer>
            <Blank>
              <TitleSpan02>What's Our service?</TitleSpan02>
              <HorizontalLine />
            </Blank>
            <Blank>
              <SubTitleSpan02>
                "저기어때."는 나를 위한 맞춤형 자취지역을 찾아 해매던
              </SubTitleSpan02>
              <SubTitleSpan02>
                대학생들이 직접 만든 자취지역 추천 시스템입니다.
              </SubTitleSpan02>
            </Blank>
            <Blank>
              <ContentSpan02>
                대학생들이 피부로 느낀, 자취지역의 핵심요소를 고려하여
              </ContentSpan02>
              <ContentSpan02>나의, 나를 위한, 오직 나에 의한,</ContentSpan02>
              <ContentSpan02>
                자취지역을 A.I알고리즘으로 추천해 드립니다.
              </ContentSpan02>
            </Blank>
            <Blank>
              <MoreSpan to={`/Aboutus`}>더보기</MoreSpan>
            </Blank>
          </RightContainer>
        </Article>
        <Article>
          <ContentContainer>
            <TitleSpan>테마별로 자취지역 찾기</TitleSpan>
            <Container>
              <RightTopContainer to="/RecommendationIntro">
                <ContentSpan>DIY 방식</ContentSpan>
                <ContentSmallSpan>
                  이용자가 직접 고려요소를 입력하여
                </ContentSmallSpan>
                <ContentSmallSpan>추천을 받는 방식입니다.</ContentSmallSpan>
              </RightTopContainer>
              <RightTopContainer to="/RecommendationIntro">
                <ContentSpan>학우들의 선택</ContentSpan>
                <ContentSmallSpan>학우들이 추천한 자취지역을</ContentSmallSpan>
                <ContentSmallSpan>추천 받는 방식입니다.</ContentSmallSpan>
              </RightTopContainer>
              <RightTopContainer to="/RecommendationIntro">
                <ContentSpan>제작자's pick</ContentSpan>
                <ContentSmallSpan>제작자가 선별한 자취지역을</ContentSmallSpan>
                <ContentSmallSpan>추천 받는 방식입니다.</ContentSmallSpan>
              </RightTopContainer>
            </Container>
          </ContentContainer>
        </Article>
        <Article>
          <ContentContainer>
            <TitleSpan>저기어때.의 이용후기</TitleSpan>
            <ColumnContainer>
              <Slider imgs={[homeEx, homeEx3, homeEx4]} />
            </ColumnContainer>
            <ColumnContainer justify={"flex-start"}>
              <MediumSpan></MediumSpan>
              <MediumSpan></MediumSpan>
              <MediumSpan></MediumSpan>
            </ColumnContainer>
          </ContentContainer>
        </Article>
      </Wrapper>
    </>
  );
};

export default Home;
