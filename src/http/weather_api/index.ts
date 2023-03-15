import axios from "axios";

import { WEATHER_API_URL } from "../../shared/sharedUrls";

const weatherApi = axios.create({
  baseURL: WEATHER_API_URL,
});

export default weatherApi;
