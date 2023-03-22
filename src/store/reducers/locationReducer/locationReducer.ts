import {
  LocationAction,
  LocationActionTypes,
  LocationState,
} from "./interface";

const initialState: LocationState = {
  name: "",
  country: "",
  lon: 0,
  lat: 0,
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
        name: "",
        country: "",
        lon: 0,
        lat: 0,
        loading: true,
        error: null,
      };
    case LocationActionTypes.GET_LOCATION_SUCCESS:
      return {
        name: action.payload.name,
        country: action.payload.country,
        lon: action.payload.lon,
        lat: action.payload.lat,
        loading: false,
        error: null,
      };
    case LocationActionTypes.GET_LOCATION_ERROR:
      return {
        name: "",
        country: "",
        lon: 0,
        lat: 0,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
