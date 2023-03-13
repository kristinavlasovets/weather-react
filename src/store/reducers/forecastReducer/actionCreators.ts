import { IForecast } from "../../../models/IForecast";
import { GetOpenWeatherParams } from "../../../services/openWeatherService";
import {
  GetForecastRequest,
  GetForecastSuccess,
  GetForecastError,
  ForecastActionTypes,
} from "./interface";

export const getForecastRequestAction = (
  payload: GetOpenWeatherParams,
): GetForecastRequest => {
  return {
    type: ForecastActionTypes.GET_FORECAST_REQUEST,
    payload,
  };
};
export const getForecastSuccessAction = (
  payload: IForecast,
): GetForecastSuccess => {
  return {
    type: ForecastActionTypes.GET_FORECAST_SUCCESS,
    payload,
  };
};
export const getForecastErrorAction = (payload: string): GetForecastError => {
  return {
    type: ForecastActionTypes.GET_FORECAST_ERROR,
    payload,
  };
};
