import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vw;
`;

const ImageContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0.5px;
`;
const SpanContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vw;
`;
const RightTopContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const RightBottomContainer = styled(Link)`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentTitleSpan = styled.span`
  font-size: 2vw;
  margin: 5vw 0;
`;
const ContentSpan = styled.span`
  font-size: 1.2vw;
  margin-bottom: 2vw;
`;

const SpanLink = styled(Link)`
  font-size: 1.2vw;
  border: 4px solid black;
  padding: 1vw 2vw;
  :hover {
    color: white;
    font-weight: 800;
  }
`;

const Aboutus = () => {
  return (
    <Wrapper>
      <Article>
        <OuterBox>
          <ContentContainer>
            <SpanContainer>
              <RightTopContainer>
                <ContentTitleSpan>
                  내가 원하는 나만의 자취지역을 추천받을 수는 없을까?
                </ContentTitleSpan>
                <ContentSpan>
                  이러한 갈증으로부터 시작된 저희의 프로젝트는 '저기어때'라는
                  이름 처럼 선호 유형과 몇몇의 문답을 통하여 나에게 딱 맞는
                  자취지역을 추천해주는 시스템을 만드는 것이 목표입니다.
                </ContentSpan>
                <ContentSpan>
                  이러한 갈증으로부터 시작된 저희의 프로젝트는 '저기어때'라는
                  이름 처럼 선호 유형과 몇몇의 문답을 통하여 나에게 딱 맞는
                  자취지역을 추천해주는 시스템을 만드는 것이 목표입니다.
                </ContentSpan>
                <ContentSpan>
                  이러한 갈증으로부터 시작된 저희의 프로젝트는 '저기어때'라는
                  이름 처럼 선호 유형과 몇몇의 문답을 통하여 나에게 딱 맞는
                  자취지역을 추천해주는 시스템을 만드는 것이 목표입니다.
                </ContentSpan>
                <ContentSpan>
                  자 그럼 나만의 자취지역을 추천받으러 떠나볼까요?
                </ContentSpan>
              </RightTopContainer>
              <RightBottomContainer>
                <SpanLink to="/RecommendationIntro">바로 찾으러 가기</SpanLink>
              </RightBottomContainer>
            </SpanContainer>
          </ContentContainer>
        </OuterBox>
      </Article>
      <Article>
        <OuterBox>
          <TitleContainer>
            <TitleSpan>2021학년도 1학기 캡스톤 디자인</TitleSpan>
          </TitleContainer>
          <ContentContainer>
            <SpanContainer>
              <RightTopContainer>
                <ContentSpan>저희 팀이 궁금하시다면?</ContentSpan>
                <ContentSpan>모두 이곳에 있다.</ContentSpan>
              </RightTopContainer>
              <RightBottomContainer>
                <ContentSpan>회원이 되고 싶으시다면?</ContentSpan>
              </RightBottomContainer>
            </SpanContainer>
          </ContentContainer>
        </OuterBox>
      </Article>
    </Wrapper>
  );
};

export default Aboutus;
