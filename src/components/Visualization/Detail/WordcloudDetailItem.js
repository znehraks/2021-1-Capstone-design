import React, { useEffect } from "react";
import styled from "styled-components";
import Wordcloud from "../Wordcloud";

const DetailItem = styled.div`
  width: 100%;
  display: ${(props) =>
    (props.mode === "main") | (props.mode === "Wordcloud") ? `flex` : "none"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubTitleSpan = styled.span`
  font-size: 1vw;
  margin-top: 0.5vw;
`;

const Detail = ({ hashtags, mode, setMode }) => {
  return (
    <>
      <DetailItem
        mode={mode}
        onClick={() => {
          if (mode !== "Wordcloud") {
            setMode("Wordcloud");
          } else {
            setMode("main");
          }
        }}
      >
        <SubTitleSpan>선택된 지역의 매물 분포입니다.</SubTitleSpan>
        <Wordcloud hashtags={hashtags} />
      </DetailItem>
    </>
  );
};

export default Detail;
