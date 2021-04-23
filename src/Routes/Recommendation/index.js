import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Q1 from "../../components/Q1";
import Q2 from "../../components/Q2";
import Q3 from "../../components/Q3";
import Q4 from "../../components/Q4";
import Q5 from "../../components/Q5";
import QList from "../../components/QList";
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
const Recommendation = () => {
  const [QNumber, setQNumber] = useState(1);
  const [Q1Answer, setQ1Answer] = useState();
  const [Q2Answer, setQ2Answer] = useState();
  const [Q3Answer, setQ3Answer] = useState();
  const [Q4Answer, setQ4Answer] = useState();
  const [Q5Answer, setQ5Answer] = useState();
  const [Q1Name, setQ1Name] = useState();
  const [Q2Name, setQ2Name] = useState();
  const [Q3Name, setQ3Name] = useState();
  const [Q4Name, setQ4Name] = useState();
  const [Q5Name, setQ5Name] = useState();
  console.log(Q1Answer);
  console.log(Q2Answer);
  console.log(Q3Answer);
  console.log(Q4Answer);
  console.log(Q5Answer);
  return (
    <>
      {QNumber === 1 && (
        <Q1
          Q1Name={Q1Name}
          setQ1Name={setQ1Name}
          QList={QList}
          QNumber={QNumber}
          setQNumber={setQNumber}
          Q1Answer={Q1Answer}
          setQ1Answer={setQ1Answer}
        />
      )}
      {QNumber === 2 && (
        <Q2
          Q1Name={Q1Name}
          Q2Name={Q2Name}
          setQ2Name={setQ2Name}
          QList={QList}
          Q1Answer={Q1Answer}
          Q2Answer={Q2Answer}
          QNumber={QNumber}
          setQNumber={setQNumber}
          Q2Answer={Q2Answer}
          setQ2Answer={setQ2Answer}
        />
      )}
      {QNumber === 3 && (
        <Q3
          Q1Name={Q1Name}
          Q2Name={Q2Name}
          Q3Name={Q3Name}
          setQ3Name={setQ3Name}
          Q1Answer={Q1Answer}
          Q2Answer={Q2Answer}
          Q3Answer={Q3Answer}
          QNumber={QNumber}
          setQNumber={setQNumber}
          Q3Answer={Q3Answer}
          setQ3Answer={setQ3Answer}
          QList={QList}
        />
      )}
      {QNumber === 4 && (
        <Q4
          Q1Name={Q1Name}
          Q2Name={Q2Name}
          Q3Name={Q3Name}
          Q4Name={Q4Name}
          setQ4Name={setQ4Name}
          Q1Answer={Q1Answer}
          Q2Answer={Q2Answer}
          Q3Answer={Q3Answer}
          Q4Answer={Q4Answer}
          Q3Answer={Q3Answer}
          QNumber={QNumber}
          setQNumber={setQNumber}
          Q4Answer={Q4Answer}
          setQ4Answer={setQ4Answer}
          QList={QList}
        />
      )}
      {QNumber === 5 && (
        <Q5
          Q1Name={Q1Name}
          Q2Name={Q2Name}
          Q3Name={Q3Name}
          Q4Name={Q4Name}
          Q5Name={Q5Name}
          setQ5Name={setQ5Name}
          Q1Answer={Q1Answer}
          Q2Answer={Q2Answer}
          Q3Answer={Q3Answer}
          Q4Answer={Q4Answer}
          Q5Answer={Q5Answer}
          Q3Answer={Q3Answer}
          Q4Answer={Q4Answer}
          QNumber={QNumber}
          setQNumber={setQNumber}
          Q5Answer={Q5Answer}
          setQ5Answer={setQ5Answer}
          QList={QList}
        />
      )}
    </>
  );
};

export default Recommendation;
