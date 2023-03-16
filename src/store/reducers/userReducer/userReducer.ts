import { UserAction, UserActionTypes, UserState } from "./interface";

const initialState: UserState = {
  api: "openWeather",
  isLogin: false,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_OPEN_WEATHER:
      return {
        ...state,
        api: "openWeather",
      };
    case UserActionTypes.SET_WEATHER:
      return {
        ...state,
        api: "weather",
      };
    case UserActionTypes.SET_IS_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    default:
      return state;
  }
};

export default userReducer;
