import axios, { InternalAxiosRequestConfig } from "axios";

import { STORMGLASS_API_URL } from "../../shared/sharedUrls";

const stormGlassApi = axios.create({
  baseURL: STORMGLASS_API_URL,
});

stormGlassApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // eslint-disable-next-line no-param-reassign
  config!.headers!.Authorization = process.env.STORMGLASS_API_KEY;
  return config;
});

export default stormGlassApi;
