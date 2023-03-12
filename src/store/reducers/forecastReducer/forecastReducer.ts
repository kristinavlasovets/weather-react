import { IForecast } from "../../../models/IForecast";
import {
  ForecastAction,
  ForecastActionTypes,
  ForecastState,
} from "./interface";

const initialState: ForecastState = {
  forecast: {} as IForecast,
  loading: false,
  error: null,
};

const forecastReducer = (
  state = initialState,
  action: ForecastAction,
): ForecastState => {
  switch (action.type) {
    case ForecastActionTypes.GET_FORECAST_REQUEST:
      return {
        forecast: {} as IForecast,
        loading: true,
        error: null,
      };
    case ForecastActionTypes.GET_FORECAST_SUCCESS:
      return {
        forecast: action.payload,
        loading: false,
        error: null,
      };
    case ForecastActionTypes.GET_FORECAST_ERROR:
      return {
        forecast: {} as IForecast,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default forecastReducer;
