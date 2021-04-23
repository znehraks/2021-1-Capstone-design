import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  margin-top: 6vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: red;
`;
const TitleSpan = styled.span`
  font-size: 2.5vw;
  margin-top: 5vw;
`;
const SubTitleSpan = styled.span`
  font-size: 1vw;
  margin-top: 1vw;
  margin-bottom: 6vw;
`;
const Article = styled.div`
  width: 70%;
  height: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vw;
`;
const InputBox = styled.input`
  width: 50%;
  height: 3vw;
  font-size: 2vw;
  border: none;
  border-bottom: 4px solid black;
  background: transparent;
`;
const HiddenList = styled.div`
  width: 50%;
  height: auto;
  font-size: 1.5vw;
  /* display: {props=>props.} */
`;
const HiddenListItem = styled.span`
  font-size: 2vw;
`;
const ButtonContainer = styled.div`
  width: 50%;
  height: 4vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Next = styled.span`
  width: 6vw;
  height: 3.5vw;
  font-size: 1.5vw;
  border: 2px solid rgba(0, 0, 0, 0.4);
  padding: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    color: white;
    background: black;
    font-weight: 800;
  }
`;
const Q1 = ({ Q1Name, setQNumber, Q1Answer, setQ1Answer }) => {
  return (
    <Wrapper>
      <TitleSpan>#1.자신의 학교 이름을 입력해 주세요.</TitleSpan>
      <SubTitleSpan>
        ex."명지대학교" 검색을 원하는 경우 "명지" 혹은 "명지대학교"를 입력해
        주세요.
      </SubTitleSpan>
      <Article>
        <InputBox placeholder={"ex.명지대학교"}></InputBox>
        <HiddenList>
          {/*
                Array.map() 사용
                <HiddenListItem></HiddenListItem> */}
        </HiddenList>
      </Article>
      <ButtonContainer>
        <Next onClick={() => setQNumber(2)}>다음</Next>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Q1;
