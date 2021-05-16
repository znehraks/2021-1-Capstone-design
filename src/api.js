import axios from "axios";
const api = axios.create({
  baseURL: "https://capstone-backend.run.goorm.io/",
  // baseURL: "http://localhost:5000",
  // baseURL: "https://resi-reco-backend.herokuapp.com/",
});

//api 모아두기
export const Api = {
  getResidence: (
    univ_name,
    univ_lon,
    univ_lat,
    Q2Answer,
    Q3Answer,
    Q4Answer,
    Q5Answer,
    w1,
    w2,
    w3,
    w4,
    w5
  ) =>
    api.post(`/recommendation`, {
      univ_name,
      univ_lon,
      univ_lat,
      Q2Answer,
      Q3Answer,
      Q4Answer,
      Q5Answer,
      w1,
      w2,
      w3,
      w4,
      w5,
    }),
};
