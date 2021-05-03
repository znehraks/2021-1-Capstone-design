import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Map2 from "../../components/Kakao/Map2";
import homeEx from "../../components/Styles/images/homeEx.jpg";
import homeEx2 from "../../components/Styles/images/homeEx2.jpg";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 45vw;
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
  height: 45vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: red;
`;

const OuterBox = styled.div`
  width: 60%;
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
  font-size: 2vw;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vw;
`;

const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0.5px;
`;
const RightTopContainer = styled(Link)`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-bottom: none;
  :hover {
    color: #fff;
    border: 4px solid rgba(0, 0, 0, 1);
  }
`;
const RightBottomContainer = styled(Link)`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.5);
  :hover {
    color: #fff;
    border: 4px solid rgba(0, 0, 0, 1);
  }
`;

const ContentImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentSpan = styled.span`
  font-size: 2vw;
`;

const Home = () => {
  return (
    <Wrapper>
      <Article>
        <OuterBox>
          <TitleContainer>
            <TitleSpan>오직 나를 위한 맞춤형 자취지역. 저기 어때</TitleSpan>
          </TitleContainer>
          <ContentContainer>
            <Container>
              <ContentImage src={homeEx2} />
            </Container>
            <Container>
              <RightTopContainer to="/RecommendationIntro">
                <ContentSpan>당신이 원하는 자취지역?</ContentSpan>
                <ContentSpan>모두 이곳에 있다.</ContentSpan>
              </RightTopContainer>
              <RightBottomContainer to="/RecommendationIntro">
                <ContentSpan>바로 찾으러 가기</ContentSpan>
              </RightBottomContainer>
            </Container>
          </ContentContainer>
        </OuterBox>
      </Article>
      <Article>
        <OuterBox>
          <TitleContainer>
            <TitleSpan>2021학년도 1학기 캡스톤 디자인</TitleSpan>
          </TitleContainer>
          <ContentContainer>
            <Container>
              <RightTopContainer to="/Aboutus">
                <ContentSpan>저희 팀이 궁금하시다면?</ContentSpan>
                <ContentSpan>모두 이곳에 있다.</ContentSpan>
              </RightTopContainer>
              <RightBottomContainer to="/Auth">
                <ContentSpan>회원이 되고 싶으시다면?</ContentSpan>
              </RightBottomContainer>
            </Container>
            <Container>
              <ContentImage src={homeEx} />
            </Container>
          </ContentContainer>
        </OuterBox>
      </Article>
      <Article>
        <Map2 />
      </Article>
    </Wrapper>
  );
};

export default Home;
