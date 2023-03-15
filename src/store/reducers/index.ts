import { combineReducers } from "redux";
import forecastReducer from "./forecastReducer/forecastReducer";
import hourlyForecastReducer from "./hourlyForecastReducer/hourlyForecastReducer";
import locationReducer from "./locationReducer/locationReducer";
import secondForecastReducer from "./secondForecastReducer/secondForecastReducer";
import userReducer from "./userReducer/userReducer";

const rootReducer = combineReducers({
  location: locationReducer,
  forecast: forecastReducer,
  secondForecast: secondForecastReducer,
  hourlyForecast: hourlyForecastReducer,
  user: userReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
