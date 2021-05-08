import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import homeEx from "../../components/Styles/images/homeEx.png";
import homeEx3 from "../../components/Styles/images/homeEx3.jpg";
import homeEx4 from "../../components/Styles/images/homeEx4.jpg";
import homeEx5 from "../../components/Styles/images/homeEx5.jpg";
import homeEx6 from "../../components/Styles/images/homeEx6.jpg";
import SliderComponent from "../../components/Slider";

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
  background: ${(props) => props.theme.bgColor};
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
  border: 2px solid black;
`;
const BlackSquare02 = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 95%;
  height: 90%;
  background: transparent;
  border: 2px solid black;
`;
const Article = styled.div`
  width: 100vw;
  height: 45vw;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.theme.jc ? `flex-start` : `center`)};
  align-items: center;
  background: ${(props) => (props.bgColor ? `${props.bgColor}` : ``)};
`;

const Slider = styled(SliderComponent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vw;
`;
const OuterBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  width: 50%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2vw 0.5px;
  animation: ${Animation02} 1s linear;
`;
const RightTopContainer = styled(Link)`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 2vw;
  transition-duration: 0.5s;
  :hover {
    color: #fff;
    border: 4px solid rgba(0, 0, 0, 1);
  }
`;
const RightBottomContainer = styled(Link)`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition-duration: 0.5s;
  border: 2px solid rgba(0, 0, 0, 0.5);
  :hover {
    color: #fff;
    border: 4px solid rgba(0, 0, 0, 1);
  }
`;

const ContentImage = styled.img`
  width: auto;
  height: 100%;
`;

const ContentSpan = styled.span`
  font-size: 2vw;
`;

const Home = () => {
  return (
    <Wrapper>
      <Article bgColor={"red"}>
        <ContentContainer>
          <SquareDiv>
            <TitleContainer>
              <TitleSpan>오직 나를 위한 맞춤형 자취지역.</TitleSpan>
              <SlowTitleSpan>저기어때.</SlowTitleSpan>
            </TitleContainer>
            <BlackSquare01 />
            <BlackSquare02 />
          </SquareDiv>
        </ContentContainer>
      </Article>
      <Article bgColor={"red"}>
        <ContentContainer>
          <TitleSpan>개인 맞춤형 자취지역 찾기</TitleSpan>
          <Container>
            <Slider imgs={[homeEx, homeEx3, homeEx4]} />
          </Container>
          <Container>
            <TitleSpan>개인 맞춤형 자취지역 찾기</TitleSpan>
            <TitleSpan>개인 맞춤형 자취지역 찾기</TitleSpan>
            <TitleSpan>개인 맞춤형 자취지역 찾기</TitleSpan>
            <TitleSpan>개인 맞춤형 자취지역 찾기</TitleSpan>
          </Container>
        </ContentContainer>
      </Article>
      <Article bgColor={"red"}>
        <ContentContainer>
          <TitleSpan>테마별로 자취지역 찾기</TitleSpan>
          <Container>
            <RightTopContainer to="/RecommendationIntro">
              <ContentSpan>내가 직접 자취지역 찾으러 가기</ContentSpan>
            </RightTopContainer>
            <RightBottomContainer to="/RecommendationIntro">
              <ContentSpan>학우들이 추천하는 자취지역 찾으러 가기</ContentSpan>
            </RightBottomContainer>
          </Container>
        </ContentContainer>
      </Article>
    </Wrapper>
  );
};

export default Home;
