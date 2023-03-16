export interface UserState {
  api: "openWeather" | "weather";
  isLogin: boolean;
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  SET_OPEN_WEATHER = "SET_OPEN_WEATHER",
  SET_WEATHER = "SET_WEATHER",
  SET_IS_LOGIN = "SET_IS_LOGIN",
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

export type UserAction = SetOpenWeather | SetWeather | SetIsLogin;
