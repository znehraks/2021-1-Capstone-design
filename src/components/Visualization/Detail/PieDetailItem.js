import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PieRoom from "../PieRoom";
import Map2 from "../../Kakao/Map2";
const { kakao } = window;

const DetailItem = styled.div`
  width: 100%;
  display: ${(props) =>
    (props.mode === "main") | (props.mode === "Pie") ? `flex` : "none"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubTitleSpan = styled.span`
  font-size: 0.9vw;
  margin-top: 0.5vw;
`;

const Detail = ({ isClicked, mode, setMode }) => {
  //매물 별로 지도에 다르게 뿌려주기
  const [positions, setPositions] = useState();
  useEffect(() => {
    console.log(isClicked.rooms_location_lat);
    if (isClicked) {
      let temp = [];
      for (let i = 0; i < isClicked.rooms_location_lat.length; i++) {
        temp.push({
          latlng: new kakao.maps.LatLng(
            isClicked.rooms_location_lat[i],
            isClicked.rooms_location_lon[i]
          ),
        });
      }
      setPositions(temp);
    }
  }, [isClicked]);
  return (
    <>
      <DetailItem
        mode={mode}
        onClick={() => {
          if (mode !== "Pie") {
            setMode("Pie");
          } else {
            setMode("main");
          }
        }}
      >
        <SubTitleSpan>선택된 지역의 매물 분포입니다.</SubTitleSpan>
        <PieRoom mode={mode} isClicked={isClicked} />
      </DetailItem>
      {mode === "Pie" && (
        <DetailItem mode={mode}>
          <SubTitleSpan>선택된 지역의 매물 분포입니다.</SubTitleSpan>

          {positions && (
            <Map2
              isClicked={isClicked}
              univ_lat={isClicked.lat}
              univ_lon={isClicked.lon}
              residencePositions={positions}
            />
          )}
        </DetailItem>
      )}
    </>
  );
};

export default Detail;
