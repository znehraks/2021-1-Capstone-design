import React, { useEffect } from "react";
import Rank01 from "../Styles/images/rank01.jpg";
import Rank02 from "../Styles/images/rank02.jpg";
import Rank03 from "../Styles/images/rank03.jpg";
const { kakao } = window;

const MapContainer = () => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(37.58085939, 126.92217616),
      level: 5,
      draggable: false,
      scrollwheel: false,
    };
    const map = new kakao.maps.Map(container, options);
    const marker01 = new kakao.maps.Marker({
      map: map,
      // image: Rank01,
      position: new kakao.maps.LatLng(37.58085939, 126.92217616),
    });
    const marker02 = new kakao.maps.Marker({
      map: map,
      // image: Rank02,
      position: new kakao.maps.LatLng(37.5815939, 126.92217616),
    });
    const marker03 = new kakao.maps.Marker({
      map: map,
      // image: Rank03,
      position: new kakao.maps.LatLng(37.58255939, 126.92217616),
    });
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
