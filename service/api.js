import axios from "axios";

export const apiCall = (method, url, data) => {
  return axios({
    method,
    url: `${url}`,
    data
  });
};
