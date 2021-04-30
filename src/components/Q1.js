import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../Hooks/useInput";

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
  -ms-overflow-style: none;
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
  height: 10vw;
  font-size: 1.5vw;
  display: ${(props) => (props.name !== "" ? `flex` : `none`)};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 5px;
    height: 0;
    background-color: #cc0000; /* or add it to the track */
  }
  ::-webkit-scrollbar-thumb {
    background-color: black; /* or add it to the track */
  }
  overflow: scroll;
  /* display: {props=>props.} */
`;
const HiddenListItem = styled.span`
  margin-top: 0.8vw;
  padding-bottom: 0.5vw;
  font-size: 1.5vw;
  border-bottom: 3px solid black;
  cursor: pointer;
  :hover {
    color: white;
    font-weight: 800;
  }
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
const Q1 = ({ Q1Name, setQ1Name, setQNumber, Q1Answer, setQ1Answer }) => {
  const name = useInput("");
  const list = [
    "명지대학교 인문캠퍼스",
    "성균관대학교 대학로캠퍼스",
    "국민대학교",
    "동국대학교 서울캠퍼스",
    "서울대학교 관악캠퍼스",
    "숙명여자대학교",
    "서울대학교 연건캠퍼스",
    "연세대학교 신촌캠퍼스",
  ];
  return (
    <Wrapper>
      <TitleSpan>#1.자신의 학교 이름을 입력해 주세요.</TitleSpan>
      <SubTitleSpan>
        ex."명지대학교" 검색을 원하는 경우 "명지" 혹은 "명지대학교"를 입력해
        주세요.
      </SubTitleSpan>
      <Article>
        <InputBox
          placeholder={"ex.명지대학교"}
          {...name}
          type="text"
          onClick={() => {
            name.setValue("");
            setQ1Answer();
          }}
        ></InputBox>
        {Q1Answer === undefined && (
          <HiddenList name={name.value}>
            {list.map((item, index) => {
              //name.value에 의해 filtering
              return (
                <HiddenListItem
                  key={index}
                  onClick={() => {
                    name.setValue(item);
                    setQ1Answer(item);
                  }}
                >
                  {item}
                </HiddenListItem>
              );
            })}
          </HiddenList>
        )}
      </Article>
      <ButtonContainer>
        <Next
          onClick={() => {
            if (name.value.length === 0) {
              alert("학교이름은 필수 항목 입니다.");
              return;
            }
            setQ1Name(Q1Answer);
            setQNumber(2);
          }}
        >
          다음
        </Next>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Q1;
