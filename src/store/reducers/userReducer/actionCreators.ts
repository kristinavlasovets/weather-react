import { ICalendar } from "../../../models/ICalendar";
import {
  SetEvents,
  SetIsLogin,
  SetOpenWeather,
  SetWeather,
  UserActionTypes,
} from "./interface";

export const setOpenWeatherAction = (payload: string): SetOpenWeather => {
  return {
    type: UserActionTypes.SET_OPEN_WEATHER,
    payload,
  };
};
export const setWeatherAction = (payload: string): SetWeather => {
  return {
    type: UserActionTypes.SET_WEATHER,
    payload,
  };
};
export const setIsLoginAction = (payload: boolean): SetIsLogin => {
  return {
    type: UserActionTypes.SET_IS_LOGIN,
    payload,
  };
};
export const setEventsAction = (payload: ICalendar[]): SetEvents => {
  return {
    type: UserActionTypes.SET_EVENTS,
    payload,
  };
};
