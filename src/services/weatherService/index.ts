import { AxiosResponse } from "axios";
import weatherApi from "../../http/weather_api";

export interface GetWeatherParams {
  lat: number;
  lon: number;
}

export function getSecondWeather<T>(
  options: GetWeatherParams,
): Promise<AxiosResponse<T>> {
  const { lat, lon } = options;
  return weatherApi(
    `/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${lat},${lon}&days=7&aqi=no&alerts=no`,
  );
}
