import { IOption } from "../../../models/IOption";
import {
  GetLocationAction,
  GetLocationErrorAction,
  GetLocationSuccessAction,
  LocationActionTypes,
} from "./interface";

export const getLocationAction = (): GetLocationAction => {
  return {
    type: LocationActionTypes.GET_LOCATION,
  };
};
export const getLocationSuccessAction = (
  payload: IOption,
): GetLocationSuccessAction => {
  return {
    type: LocationActionTypes.GET_LOCATION_SUCCESS,
    payload,
  };
};
export const getLocationErrorAction = (
  payload: string,
): GetLocationErrorAction => {
  return {
    type: LocationActionTypes.GET_LOCATION_ERROR,
    payload,
  };
};
