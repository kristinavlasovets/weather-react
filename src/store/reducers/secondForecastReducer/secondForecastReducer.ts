import { ISecondForecast } from "../../../models/ISecondForecast";
import {
  SecondForecastState,
  SecondForecastAction,
  SecondForecastActionTypes,
} from "./interface";

const initialState: SecondForecastState = {
  secondForecast: {} as ISecondForecast,
  loading: false,
  error: null,
};
const secondForecastReducer = (
  state = initialState,
  action: SecondForecastAction,
): SecondForecastState => {
  switch (action.type) {
    case SecondForecastActionTypes.GET_SECOND_FORECAST_REQUEST:
      return {
        secondForecast: {} as ISecondForecast,
        loading: true,
        error: null,
      };
    case SecondForecastActionTypes.GET_SECOND_FORECAST_SUCCESS:
      return {
        secondForecast: action.payload,
        loading: false,
        error: null,
      };
    case SecondForecastActionTypes.GET_SECOND_FORECAST_ERROR:
      return {
        secondForecast: {} as ISecondForecast,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default secondForecastReducer;
