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
  const [results, setResults] = useState();
  const name = useInput("");
  //학교이름 DB에서 가져오기. 이름 한글자라도 틀리면 백엔드에서 에러생김
  const list = [
    "서울시립대학교",
    "서울여자간호대학교",
    "서울여자대학교",
    "서일대학교",
    "성공회대학교",
    "성균관대학교",
    "성신여자대학교",
    "세종대학교",
    "숙명여자대학교",
    "숭실대학교",
    "숭의여자대학교",
    "연세대학교",
    "이화여자대학교",
    "인덕대학교",
    "장로회신학대학교",
    "적십자간호대학",
    "중앙대학교 서울캠퍼스",
    "총신대학교",
    "추계예술대학교",
    "한국방송통신대학교",
    "한국성서대학교",
    "한국예술종합학교",
    "한국외국어대학교",
    "한국체육대학교",
    "한국폴리텍 I 대학 서울강서캠퍼스",
    "한국폴리텍Ⅰ대학 서울정수캠퍼스",
    "한성대학교",
    "한양대학교",
    "한양여자대학교",
    "한영신학대학교",
    "홍익대학교",
    "가톨릭대학교",
    "가톨릭대학교",
    "감리교신학대학교",
    "건국대학교",
    "경기대학교",
    "경희대학교",
    "고려대학교",
    "광운대학교",
    "국민대학교",
    "국제예술대학",
    "그리스도대학교",
    "덕성여자대학교",
    "동국대학교",
    "동덕여자대학교",
    "동양미래대학교",
    "디지털서울문화예술대학교",
    "명지대학교 인문캠퍼스",
    "명지전문대학",
    "배화여자대학교",
    "백석예술대학교",
    "사이버한국외국어대학교",
    "삼육대학교",
    "삼육보건대학교",
    "상명대학교",
    "서강대학교",
    "서경대학교",
    "서울과학기술대학교",
    "서울과학기술대학교",
    "서울교육대학교",
    "서울기독대학교",
    "서울대학교",
    "서울디지털대학교",
    "서울사이버대학교",
  ];
  const filtered = (list) => {
    list = list.filter((item) => item.indexOf(name.value) > -1);
    return list.map((item, index) => (
      <HiddenListItem
        key={index}
        onClick={() => {
          name.setValue(item);
          setQ1Answer(item);
        }}
      >
        {item}
      </HiddenListItem>
    ));
  };
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
          <HiddenList name={name.value}>{filtered(list)}</HiddenList>
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
