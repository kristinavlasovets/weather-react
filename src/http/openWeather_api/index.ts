import axios from "axios";

import { OPENWEATHER_API_URL } from "../../shared/sharedUrls";

const openWeatherApi = axios.create({
  baseURL: OPENWEATHER_API_URL,
});

export default openWeatherApi;
