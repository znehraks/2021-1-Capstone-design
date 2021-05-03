import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5000/",
});

//api 모아두기
export const Api = {
  getResidence: (univ_name, univ_lat, univ_lon, Q2Answer, w1, w2, w3, w4, w5) =>
    api.post(`/recommendation`, {
      univ_name,
      univ_lat,
      univ_lon,
      Q2Answer,
      w1,
      w2,
      w3,
      w4,
      w5,
    }),
};
