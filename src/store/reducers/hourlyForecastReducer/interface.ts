import { IHourlyForecast } from "../../../models/IHourlyForecast";
import { GetStormGlassParams } from "../../../services/stormGlassService";

export interface HourlyForecastState {
  hourlyForecast: IHourlyForecast;
  loading: boolean;
  error: null | string;
}

export enum HourlyForecastActionTypes {
  GET_HOURLY_FORECAST_REQUEST = "GET_HOURLY_FORECAST_REQUEST",
  GET_HOURLY_FORECAST_SUCCESS = "GET_HOURLY_FORECAST_SUCCESS",
  GET_HOURLY_FORECAST_ERROR = "GET_HOURLY_FORECAST_ERROR",
}

export interface GetHourlyForecastRequest {
  type: HourlyForecastActionTypes.GET_HOURLY_FORECAST_REQUEST;
  payload: GetStormGlassParams;
}
export interface GetHourlyForecastSuccess {
  type: HourlyForecastActionTypes.GET_HOURLY_FORECAST_SUCCESS;
  payload: IHourlyForecast;
}
export interface GetHourlyForecastError {
  type: HourlyForecastActionTypes.GET_HOURLY_FORECAST_ERROR;
  payload: string;
}

export type HourlyForecastAction =
  | GetHourlyForecastRequest
  | GetHourlyForecastSuccess
  | GetHourlyForecastError;
