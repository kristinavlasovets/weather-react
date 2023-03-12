import { combineReducers } from "redux";
import forecastReducer from "./forecastReducer/forecastReducer";
import locationReducer from "./locationReducer/locationReducer";

const rootReducer = combineReducers({
  location: locationReducer,
  forecast: forecastReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
