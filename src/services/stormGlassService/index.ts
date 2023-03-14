import { AxiosResponse } from "axios";
import stormGlassApi from "../../http/stormGlass_api";

export interface GetStormGlassParams {
  lat: number;
  lng: number;
}

export function getHourlyWeather<T>(
  options: GetStormGlassParams,
): Promise<AxiosResponse<T>> {
  const { lat, lng } = options;
  const params = "airTemperature,humidity,cloudCover,windSpeed";
  return stormGlassApi(`/weather/point?lat=${lat}&lng=${lng}&params=${params}`);
}
