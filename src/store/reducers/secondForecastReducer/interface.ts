import { ISecondForecast } from "../../../models/ISecondForecast";
import { GetWeatherParams } from "../../../services/weatherService";

export interface SecondForecastState {
  secondForecast: ISecondForecast;
  loading: boolean;
  error: null | string;
}

export enum SecondForecastActionTypes {
  GET_SECOND_FORECAST_REQUEST = "GET_SECOND_FORECAST_REQUEST",
  GET_SECOND_FORECAST_SUCCESS = "GET_SECOND_FORECAST_SUCCESS",
  GET_SECOND_FORECAST_ERROR = "GET_SECOND_FORECAST_ERROR",
}

export interface GetSecondForecastRequest {
  type: SecondForecastActionTypes.GET_SECOND_FORECAST_REQUEST;
  payload: GetWeatherParams;
}
export interface GetSecondForecastSuccess {
  type: SecondForecastActionTypes.GET_SECOND_FORECAST_SUCCESS;
  payload: ISecondForecast;
}
export interface GetSecondForecastError {
  type: SecondForecastActionTypes.GET_SECOND_FORECAST_ERROR;
  payload: string;
}

export type SecondForecastAction =
  | GetSecondForecastRequest
  | GetSecondForecastSuccess
  | GetSecondForecastError;
