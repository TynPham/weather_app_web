import axiosClient from "./axiosClient";

const weatherApi = {
  get: (params) => {
    const url = "/weather";
    return axiosClient.get(url, { params });
  },
  getforecast: (params) => {
    const url = "/forecast";
    return axiosClient.get(url, { params });
  },
  getTempAndPre: (params) => {
    const url = "/onecall";
    return axiosClient.get(url, { params });
  },
};

export default weatherApi;
