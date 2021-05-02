import React, { useEffect } from "react";

const { kakao } = window;

const MapContainer = ({ data }) => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(data[0].lat, data[0].lon),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const marker01 = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(data[0].lat, data[0].lon),
    });
    const marker02 = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(data[1].lat, data[1].lon),
    });
    const marker03 = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(data[2].lat, data[2].lon),
    });
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: "50vw",
        height: "50vw",
      }}
    ></div>
  );
};

export default MapContainer;
