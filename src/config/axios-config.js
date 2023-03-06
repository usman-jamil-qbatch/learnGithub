import axios from "axios";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    axios.defaults.headers.common["Authorization"] = "";
  }
};

// import axios from "axios";
// import { store } from "../redux/store/index";

// const api = axios.create({
//   baseURL: "http://localhost:8081",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   transformRequest: [
//     (data) => {
//       return JSON.stringify(data);
//     },
//   ],
//   transformResponse: [
//     (data) => {
//       return JSON.parse(data);
//     },
//   ],
// });

// export const setAuthToken = (token) => {};

// const listener = () => {
//   const token = store.getState().auth.user;
//   api.defaults.headers.common["Authorization"] = token;
// };

// store.subscribe(listener);

// export default api;
