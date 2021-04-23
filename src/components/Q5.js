import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import QButton from "./QButton";

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
`;
const OptionSpan = styled.span`
  font-size: 0.8vw;
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
const Prev = styled.span`
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
const Submit = styled(Link)`
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

const ItemList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div`
  width: 13vw;
  height: 15vw;
  padding: 1vw;
  margin: 0 0.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 5px 5px #dd0000;
  :hover {
    color: white;
    box-shadow: 5px 5px #880000;
    transition-duration: 0.5s;
  }
`;
const ItemImage = styled.img`
  width: 90%;
  height: auto;
`;
const ItemSpanContainer = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ItemTitle = styled.span`
  font-size: 2.4vw;
  margin-bottom: 0.5vw;
`;
const ItemDetail = styled.span`
  font-size: 0.9vw;
`;
const CurrentSelectedDiv = styled.div`
  position: absolute;
  top: 12vw;
  right: 0;
  width: 10vw;
  height: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CurrentSelectedList = styled.div`
  width: 100%;
  height: 30%;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CurrentSelectedSpan = styled.span`
  font-size: 1.5vw;
  margin-bottom: 2vw;
`;
const Q5 = ({
  Q1Name,
  Q2Name,
  Q3Name,
  Q4Name,
  Q5Name,
  setQ5Name,
  Q3Answer,
  Q4Answer,
  QNumber,
  QList,
  setQNumber,
  Q5Answer,
  setQ5Answer,
}) => {
  return (
    <>
      <CurrentSelectedDiv>
        <CurrentSelectedList>
          <CurrentSelectedSpan>명지대학교</CurrentSelectedSpan>
          <CurrentSelectedSpan>+</CurrentSelectedSpan>
        </CurrentSelectedList>
        <CurrentSelectedList>
          <CurrentSelectedSpan>500m이내</CurrentSelectedSpan>
          <CurrentSelectedSpan>+</CurrentSelectedSpan>
        </CurrentSelectedList>
        <CurrentSelectedList>
          <CurrentSelectedSpan>{Q3Name && `1. ${Q3Name}`}</CurrentSelectedSpan>
          <CurrentSelectedSpan>+</CurrentSelectedSpan>
        </CurrentSelectedList>
        <CurrentSelectedList>
          <CurrentSelectedSpan>{Q4Name && `2. ${Q4Name}`}</CurrentSelectedSpan>
          <CurrentSelectedSpan>+</CurrentSelectedSpan>
        </CurrentSelectedList>
        <CurrentSelectedList>
          <CurrentSelectedSpan>{Q5Name && `3. ${Q5Name}`}</CurrentSelectedSpan>
        </CurrentSelectedList>
      </CurrentSelectedDiv>
      <Wrapper>
        <TitleSpan>#5.세 번째로 선호하는 타입을 선택해 주세요.</TitleSpan>
        <SubTitleSpan>
          세 번째로 가장 많이 고려하는 항목을 1개 골라주세요.
        </SubTitleSpan>
        <OptionSpan>
          항목을 클릭하면 선택되며, 선택된 항목을 한 번 더 클릭하면 해제됩니다.
        </OptionSpan>
        <Article>
          <ItemList>
            {QList.map((QItem) => {
              if ((QItem.code !== Q3Answer) & (QItem.code !== Q4Answer)) {
                return (
                  <QButton
                    setQ5Name={setQ5Name}
                    key={QItem.code}
                    QNumber={QNumber}
                    QItem={QItem}
                    Q5Answer={Q5Answer}
                    setQ5Answer={setQ5Answer}
                  />
                );
              }
            })}
          </ItemList>
        </Article>
        <ButtonContainer>
          <Prev onClick={() => setQNumber(4)}>이전</Prev>
          <Submit to="/RecommendationResult">완료</Submit>
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

export default Q5;