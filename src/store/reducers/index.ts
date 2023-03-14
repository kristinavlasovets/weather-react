import { combineReducers } from "redux";
import forecastReducer from "./forecastReducer/forecastReducer";
import hourlyForecastReducer from "./hourlyForecastReducer/hourlyForecastReducer";
import locationReducer from "./locationReducer/locationReducer";

const rootReducer = combineReducers({
  location: locationReducer,
  forecast: forecastReducer,
  hourlyForecast: hourlyForecastReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
