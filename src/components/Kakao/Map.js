import React, { useEffect } from "react";
import Rank01 from "../Styles/images/rank01.jpg";
import Rank02 from "../Styles/images/rank02.jpg";
import Rank03 from "../Styles/images/rank03.jpg";
const { kakao } = window;

const MapContainer = ({ data, univ_lat, univ_lon }) => {
  useEffect(() => {
    //지도 넣을 컨테이너
    const container = document.getElementById("myMap");

    // 지도에 들어가는 옵션
    const options = {
      center: new kakao.maps.LatLng(univ_lat, univ_lon),
      level: 5,
      draggable: false,
      scrollwheel: false,
    };

    //지도 객체 생성
    const map = new kakao.maps.Map(container, options);

    //마커 정보 담은 객체 생성
    let residencePositions = [
      new kakao.maps.LatLng(data[0].lat, data[0].lon),
      new kakao.maps.LatLng(data[1].lat, data[1].lon),
      new kakao.maps.LatLng(data[2].lat, data[2].lon),
      new kakao.maps.LatLng(data[3].lat, data[3].lon),
      new kakao.maps.LatLng(data[4].lat, data[4].lon),
    ];

    //마커 크기와 옵션
    const imageSize = new kakao.maps.Size(64, 69);
    const imageOption = { offset: new kakao.maps.Point(27, 69) };

    //마커 이미지 생성
    const markerImage = new kakao.maps.MarkerImage(
      Rank01,
      imageSize,
      imageOption
    );

    //마커 생성
    const createMarkers = () => {
      for (let i = 0; i < residencePositions.length; i++) {
        new kakao.maps.Marker({
          map: map,
          position: residencePositions[i],
          //   image: markerImage,
        });
      }
    };
    createMarkers();
    // const marker01 = new kakao.maps.Marker({
    //   map: map,
    //   position: new kakao.maps.LatLng(data[0].lat, data[0].lon),
    // });
    // const marker02 = new kakao.maps.Marker({
    //   map: map,
    //   position: new kakao.maps.LatLng(data[1].lat, data[1].lon),
    // });
    // const marker03 = new kakao.maps.Marker({
    //   map: map,
    //   position: new kakao.maps.LatLng(data[2].lat, data[2].lon),
    // });
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: "30vw",
        height: "30vw",
      }}
    ></div>
  );
};

export default MapContainer;
