import axios from "axios";
import { Dispatch } from "redux";
import {
  LocationAction,
  LocationActionTypes,
} from "../reducers/locationReducer/interface";

const getLocation = () => {
  return async (dispatch: Dispatch<LocationAction>) => {
    try {
      dispatch({ type: LocationActionTypes.GET_LOCATION });
      const response = await axios.get(
        "https://api.stormglass.io/v1/weather/point?lat=58.5&lng=17.8",
      );
      dispatch({
        type: LocationActionTypes.GET_LOCATION_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: LocationActionTypes.GET_LOCATION_ERROR,
        payload: "Get location error.",
      });
    }
  };
};

export default getLocation;
