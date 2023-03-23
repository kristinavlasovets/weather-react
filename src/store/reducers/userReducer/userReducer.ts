import { ICalendar } from "../../../models/ICalendar";
import {
  UserAction,
  UserActionTypes,
  UserState,
  UserStateApiTypes,
} from "./interface";

const initialState: UserState = {
  api: UserStateApiTypes.OPENWEATHER_API,
  isLogin: false,
  loading: false,
  error: null,
  events: [] as ICalendar[],
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_OPEN_WEATHER:
      return {
        ...state,
        api: UserStateApiTypes.OPENWEATHER_API,
      };
    case UserActionTypes.SET_WEATHER:
      return {
        ...state,
        api: UserStateApiTypes.WEATHER_API,
      };
    case UserActionTypes.SET_IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    case UserActionTypes.SET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
