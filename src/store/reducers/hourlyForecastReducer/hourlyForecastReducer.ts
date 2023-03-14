import { IHourlyForecast } from "../../../models/IHourlyForecast";
import {
  HourlyForecastState,
  HourlyForecastAction,
  HourlyForecastActionTypes,
} from "./interface";

const initialState: HourlyForecastState = {
  hourlyForecast: {} as IHourlyForecast,
  loading: false,
  error: null,
};

const hourlyForecastReducer = (
  state = initialState,
  action: HourlyForecastAction,
): HourlyForecastState => {
  switch (action.type) {
    case HourlyForecastActionTypes.GET_HOURLY_FORECAST_REQUEST:
      return {
        hourlyForecast: {} as IHourlyForecast,
        loading: true,
        error: null,
      };
    case HourlyForecastActionTypes.GET_HOURLY_FORECAST_SUCCESS:
      return {
        hourlyForecast: action.payload,
        loading: false,
        error: null,
      };
    case HourlyForecastActionTypes.GET_HOURLY_FORECAST_ERROR:
      return {
        hourlyForecast: {} as IHourlyForecast,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default hourlyForecastReducer;
