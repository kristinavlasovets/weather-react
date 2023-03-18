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
    default:
      return state;
  }
};

export default userReducer;
