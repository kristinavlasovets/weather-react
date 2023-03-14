import { IHourlyForecast } from "../../../models/IHourlyForecast";
import { GetStormGlassParams } from "../../../services/stormGlassService";
import {
  GetHourlyForecastRequest,
  GetHourlyForecastSuccess,
  GetHourlyForecastError,
  HourlyForecastActionTypes,
} from "./interface";

export const getHourlyForecastRequestAction = (
  payload: GetStormGlassParams,
): GetHourlyForecastRequest => {
  return {
    type: HourlyForecastActionTypes.GET_HOURLY_FORECAST_REQUEST,
    payload,
  };
};
export const getHourlyForecastSuccessAction = (
  payload: IHourlyForecast,
): GetHourlyForecastSuccess => {
  return {
    type: HourlyForecastActionTypes.GET_HOURLY_FORECAST_SUCCESS,
    payload,
  };
};
export const getHourlyForecastErrorAction = (
  payload: string,
): GetHourlyForecastError => {
  return {
    type: HourlyForecastActionTypes.GET_HOURLY_FORECAST_ERROR,
    payload,
  };
};
