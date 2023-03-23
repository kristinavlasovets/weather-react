import { ICalendar } from "../../../models/ICalendar";

export enum UserStateApiTypes {
  OPENWEATHER_API = "openWeather",
  WEATHER_API = "weather",
}

type UserStateApi =
  | UserStateApiTypes.OPENWEATHER_API
  | UserStateApiTypes.WEATHER_API;

export interface UserState {
  api: UserStateApi;
  isLogin: boolean;
  loading: boolean;
  error: null | string;
  events: ICalendar[];
}

export enum UserActionTypes {
  SET_OPEN_WEATHER = "SET_OPEN_WEATHER",
  SET_WEATHER = "SET_WEATHER",
  SET_IS_LOGIN = "SET_IS_LOGIN",
  SET_EVENTS = "SET_EVENTS",
}
export interface SetOpenWeather {
  type: UserActionTypes.SET_OPEN_WEATHER;
  payload: string;
}
export interface SetWeather {
  type: UserActionTypes.SET_WEATHER;
  payload: string;
}
export interface SetIsLogin {
  type: UserActionTypes.SET_IS_LOGIN;
  payload: boolean;
}
export interface SetEvents {
  type: UserActionTypes.SET_EVENTS;
  payload: ICalendar[];
}

export type UserAction = SetOpenWeather | SetWeather | SetIsLogin | SetEvents;
