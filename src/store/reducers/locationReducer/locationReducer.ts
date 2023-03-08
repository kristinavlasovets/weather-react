import {
  LocationAction,
  LocationActionTypes,
  LocationState,
} from "./interface";

const GET_LOCATION = "GET_LOCATION";
const GET_LOCATION_SUCCESS = "GET_LOCATION_SUCCESS";
const GET_LOCATION_ERROR = "GET_LOCATION_ERROR";

const initialState: LocationState = {
  city: "",
  country: "",
  long: "",
  lat: "",
  loading: false,
  error: null,
};

const locationReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action: LocationAction,
): LocationState => {
  switch (action.type) {
    case LocationActionTypes.GET_LOCATION:
      return {
        city: "",
        country: "",
        long: "",
        lat: "",
        loading: true,
        error: null,
      };
    case LocationActionTypes.GET_LOCATION_SUCCESS:
      return {
        city: action.payload,
        country: action.payload,
        long: action.payload,
        lat: action.payload,
        loading: false,
        error: null,
      };
    case LocationActionTypes.GET_LOCATION_ERROR:
      return {
        city: "",
        country: "",
        long: "",
        lat: "",
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
