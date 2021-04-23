import React, { useState } from "react";
import styled from "styled-components";
import homeEx from "./Styles/images/homeEx.jpg";
import QList from "./QList";
const Item = styled.div`
  width: 13.5vw;
  height: 15vw;
  padding: 0.2vw;
  margin: 0 0.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.checked ? `white` : `black`)};
  box-shadow: ${(props) =>
    props.checked ? `4px 4px #440000` : `4px 4px #dd0000`};
  border: ${(props) => (props.checked ? `4px solid #220000` : `none`)};
  :hover {
    color: white;
    box-shadow: 4px 4px #440000;
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
const QButton = ({
  QNumber,
  QItem,
  Q3Answer,
  setQ3Answer,
  Q4Answer,
  setQ4Answer,
  Q5Answer,
  setQ5Answer,
  setQ3Name,
  setQ4Name,
  setQ5Name,
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <Item
      checked={checked}
      onClick={() => {
        if (QNumber === 3) {
          if (QItem.code === Q3Answer) {
            setQ3Answer(null);
            setQ3Name(null);
            setChecked(!checked);
            return;
          }
          if (Q3Answer) {
            alert("한 개만 선택 가능합니다.");
            return;
          }
          setChecked(!checked);
          setQ3Answer(QItem.code);
          setQ3Name(QItem.name);
        } else if (QNumber === 4) {
          if (Q4Answer) {
            if (QItem.code === Q4Answer) {
              setQ4Answer(null);
              setQ4Name(null);
              setChecked(!checked);
              return;
            }
            alert("한 개만 선택 가능합니다.");
            return;
          }
          setChecked(!checked);
          setQ4Answer(QItem.code);
          setQ4Name(QItem.name);
        } else if (QNumber === 5) {
          if (QItem.code === Q5Answer) {
            setQ5Answer(null);
            setQ5Name(null);
            setChecked(!checked);
            return;
          }
          if (Q5Answer) {
            alert("한 개만 선택 가능합니다.");
            return;
          }
          setChecked(!checked);
          setQ5Answer(QItem.code);
          setQ5Name(QItem.name);
        }
      }}
    >
      <ItemImage src={homeEx}></ItemImage>
      <ItemSpanContainer>
        <ItemTitle>{QItem.name}</ItemTitle>
        <ItemDetail>{QItem.detail}</ItemDetail>
      </ItemSpanContainer>
    </Item>
  );
};

export default QButton;
