export interface UserState {
  api: "openWeather" | "stormGlass";
  loading: boolean;
  error: null | string;
}

export enum UserActionTypes {
  SET_OPEN_WEATHER = "SET_OPEN_WEATHER",
  SET_STORM_GLASS = "SET_STORM_GLASS",
}
export interface SetOpenWeather {
  type: UserActionTypes.SET_OPEN_WEATHER;
  payload: string;
}
export interface SetStormGlass {
  type: UserActionTypes.SET_STORM_GLASS;
  payload: string;
}

export type UserAction = SetOpenWeather | SetStormGlass;
