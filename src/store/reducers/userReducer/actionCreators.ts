import { SetOpenWeather, SetStormGlass, UserActionTypes } from "./interface";

export const setOpenWeatherAction = (payload: string): SetOpenWeather => {
  return {
    type: UserActionTypes.SET_OPEN_WEATHER,
    payload,
  };
};
export const setStormGlassAction = (payload: string): SetStormGlass => {
  return {
    type: UserActionTypes.SET_STORM_GLASS,
    payload,
  };
};
