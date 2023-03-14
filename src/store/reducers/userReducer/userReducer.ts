import { UserAction, UserActionTypes, UserState } from "./interface";

const initialState: UserState = {
  api: "openWeather",
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
    case UserActionTypes.SET_STORM_GLASS:
      return {
        ...state,
        api: "stormGlass",
      };
    default:
      return state;
  }
};

export default userReducer;
