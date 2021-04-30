import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:5000/",
});

//api 모아두기
export const Api = {
  getResidence: (Q1Answer, Q2Answer, w1, w2, w3, w4, w5) =>
    api.post(`/recommendation`, {
      Q1Answer,
      Q2Answer,
      w1,
      w2,
      w3,
      w4,
      w5,
    }),
};
