import {
  LocationAction,
  LocationActionTypes,
  LocationState,
} from "./interface";

const initialState: LocationState = {
  city: "",
  country: "",
  long: "",
  lat: "",
  loading: false,
  error: null,
};

const locationReducer = (
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
