import axios from "axios";

const API_ROOT = process.env.REACT_APP_API_ROOT;
console.log(process.env);

export const callApi = (method, endpoint, data) =>
  axios({
    method,
    url: API_ROOT + endpoint,
    data,
  });
