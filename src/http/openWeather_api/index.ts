import axios, { InternalAxiosRequestConfig } from "axios";

import { OPENWEATHER_API_URL } from "../../shared/sharedUrls";

const openWeatherApi = axios.create({
  baseURL: OPENWEATHER_API_URL,
});

openWeatherApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // eslint-disable-next-line no-param-reassign
    config!.headers!.Authorization = process.env.REACT_APP_OPENWEATHER_API_KEY;
    return config;
  },
);

export default openWeatherApi;
