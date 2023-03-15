import { ISecondForecast } from "../../../models/ISecondForecast";
import { GetWeatherParams } from "../../../services/weatherService";
import {
  GetSecondForecastError,
  GetSecondForecastRequest,
  GetSecondForecastSuccess,
  SecondForecastActionTypes,
} from "./interface";

export const getSecondForecastRequestAction = (
  payload: GetWeatherParams,
): GetSecondForecastRequest => {
  return {
    type: SecondForecastActionTypes.GET_SECOND_FORECAST_REQUEST,
    payload,
  };
};
export const getSecondForecastSuccessAction = (
  payload: ISecondForecast,
): GetSecondForecastSuccess => {
  return {
    type: SecondForecastActionTypes.GET_SECOND_FORECAST_SUCCESS,
    payload,
  };
};
export const getSecondForecastErrorAction = (
  payload: string,
): GetSecondForecastError => {
  return {
    type: SecondForecastActionTypes.GET_SECOND_FORECAST_ERROR,
    payload,
  };
};
