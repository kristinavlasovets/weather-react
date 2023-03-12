import { IForecast } from "../../../models/IForecast";
import { GetWeatherParams } from "../../../services/openWeatherService";

export interface ForecastState {
  forecast: IForecast;
  loading: boolean;
  error: null | string;
}

export enum ForecastActionTypes {
  GET_FORECAST_REQUEST = "GET_FORECAST_REQUEST",
  GET_FORECAST_SUCCESS = "GET_FORECAST_SUCCESS",
  GET_FORECAST_ERROR = "GET_FORECAST_ERROR",
}

export interface GetForecastRequest {
  type: ForecastActionTypes.GET_FORECAST_REQUEST;
  payload: GetWeatherParams;
}
export interface GetForecastSuccess {
  type: ForecastActionTypes.GET_FORECAST_SUCCESS;
  payload: IForecast;
}
export interface GetForecastError {
  type: ForecastActionTypes.GET_FORECAST_ERROR;
  payload: string;
}

export type ForecastAction =
  | GetForecastRequest
  | GetForecastSuccess
  | GetForecastError;
