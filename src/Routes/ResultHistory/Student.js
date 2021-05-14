import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Back from "../../components/Styles/images/back.png";

const Wrapper = styled.div`
  width: 100vw;
  height: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6vw;
`;

const TitleSpan = styled.span`
  margin: 2vw 0;
  font-size: 2vw;
`;
const Article = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const SearchContainer = styled.div`
  width: 50%;
  height: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: Center;
  margin-bottom: 2vw;
`;
const SearchInput = styled.input`
  text-decoration: none;
  font-size: 2vw;
  background: transparent;
  border: none;
  border-bottom: 2px solid black;
  transition-duration: 0.5s;
  :hover,
  :focus {
    border-bottom: 3px solid ${(props) => props.theme.headerBgColor};
  }
`;
const SearchButton = styled.img``;
const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const ListItem = styled.div`
  width: 100%;
  height: 2vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1vw 0;
  padding-bottom: 1vw;
  border-bottom: 1px solid black;
`;
const Item = styled.div`
  flex: ${(props) => (props.flex ? `${props.flex}` : `1`)};
  font-size: 1.2vw;
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 30%;
  height: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 1vw;
`;
const Prev = styled.div`
  font-size: 1.3vw;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.headerBgColor};
  }
`;
const Current = styled.div`
  font-size: 1.3vw;
`;
const Next = styled.div`
  font-size: 1.3vw;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.headerBgColor};
  }
`;

const BackArrow = styled(Link)`
  cursor: pointer;
  position: absolute;
  right: 10vw;
  width: 4vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 2vw;
  }
`;

const OptionSpan = styled.span`
  font-size: 1vw;
`;

const Student = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <Wrapper>
        <TitleSpan>나의 학우의 추천이력</TitleSpan>
        <Article>
          <SearchContainer>
            <SearchInput></SearchInput>
            <SearchButton></SearchButton>
            <BackArrow to="/ResultHistory">
              <img src={Back}></img>
              <OptionSpan>뒤로가기</OptionSpan>
            </BackArrow>
          </SearchContainer>
          <ListContainer>
            <ListItem>
              <Item flex={2}>번호</Item>
              <Item flex={2}>학교명</Item>
              <Item flex={4}>추천받은지역</Item>
              <Item flex={1}>나의 만족도</Item>
              <Item flex={2}>일시</Item>
            </ListItem>
            <ListItem>
              <Item flex={2}>20210201</Item>
              <Item flex={2}>명지대학교 인문캠퍼스</Item>
              <Item flex={4}>서울시 남가좌동 20-1 외 4개 지역</Item>
              <Item flex={1}>4</Item>
              <Item flex={2}>2021-05-12</Item>
            </ListItem>
            <ListItem>
              <Item flex={2}>20210201</Item>
              <Item flex={2}>명지대학교 인문캠퍼스</Item>
              <Item flex={4}>서울시 남가좌동 20-1 외 4개 지역</Item>
              <Item flex={1}>4</Item>
              <Item flex={2}>2021-05-12</Item>
            </ListItem>
            <ListItem>
              <Item flex={2}>20210201</Item>
              <Item flex={2}>명지대학교 인문캠퍼스</Item>
              <Item flex={4}>서울시 남가좌동 20-1 외 4개 지역</Item>
              <Item flex={1}>4</Item>
              <Item flex={2}>2021-05-12</Item>
            </ListItem>
            <ListItem>
              <Item flex={2}>20210201</Item>
              <Item flex={2}>명지대학교 인문캠퍼스</Item>
              <Item flex={4}>서울시 남가좌동 20-1 외 4개 지역</Item>
              <Item flex={1}>4</Item>
              <Item flex={2}>2021-05-12</Item>
            </ListItem>
            <ListItem>
              <Item flex={2}>20210201</Item>
              <Item flex={2}>명지대학교 인문캠퍼스</Item>
              <Item flex={4}>서울시 남가좌동 20-1 외 4개 지역</Item>
              <Item flex={1}>4</Item>
              <Item flex={2}>2021-05-12</Item>
            </ListItem>
            <ListItem>
              <Item flex={2}>20210201</Item>
              <Item flex={2}>명지대학교 인문캠퍼스</Item>
              <Item flex={4}>서울시 남가좌동 20-1 외 4개 지역</Item>
              <Item flex={1}>4</Item>
              <Item flex={2}>2021-05-12</Item>
            </ListItem>
          </ListContainer>
        </Article>
        <ButtonContainer>
          <Prev
            onClick={() => {
              if (page <= 1) {
                alert("첫 번째 페이지 입니다.");
                return;
              }
              setPage(page - 1);
            }}
          >
            이전
          </Prev>
          <Current>{page}</Current>
          <Next
            onClick={() => {
              if (page == 4) {
                alert("마지막 페이지 입니다.");
                return;
              }
              setPage(page + 1);
            }}
          >
            다음
          </Next>
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

export default Student;
