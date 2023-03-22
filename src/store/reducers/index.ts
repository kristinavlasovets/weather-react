import { combineReducers } from "redux";

import forecastReducer from "./forecastReducer/forecastReducer";
import locationReducer from "./locationReducer/locationReducer";
import secondForecastReducer from "./secondForecastReducer/secondForecastReducer";
import userReducer from "./userReducer/userReducer";

const rootReducer = combineReducers({
  location: locationReducer,
  forecast: forecastReducer,
  secondForecast: secondForecastReducer,
  user: userReducer,
});

export default rootReducer;
