import { AxiosResponse } from "axios";
import openWeatherApi from "../../http/openWeather_api";
import { IOption } from "../../models/IOption";

export enum GetWeatherPlan {
  WEATHER = "weather",
  FORECAST = "forecast",
}

export interface GetOpenWeatherParams {
  plan: GetWeatherPlan;
  lat: number;
  lon: number;
}

export function getWeather<T>(
  options: GetOpenWeatherParams,
): Promise<AxiosResponse<T>> {
  const { lat, lon, plan } = options;
  return openWeatherApi(
    `/data/2.5/${plan}?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
  );
}

export function getGeolocation(
  value: string,
): Promise<AxiosResponse<IOption[]>> {
  return openWeatherApi(
    `/geo/1.0/direct?q=${value}&limit=5&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
  );
}
