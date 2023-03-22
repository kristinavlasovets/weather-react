import { IOption } from "../../../models/IOption";

export interface LocationState {
  name: string;
  country: string;
  lon: number;
  lat: number;
  loading: boolean;
  error: null | string;
}

export enum LocationActionTypes {
  GET_LOCATION = "GET_LOCATION",
  GET_LOCATION_SUCCESS = "GET_LOCATION_SUCCESS",
  GET_LOCATION_ERROR = "GET_LOCATION_ERROR",
}

export interface GetLocationAction {
  type: LocationActionTypes.GET_LOCATION;
}
export interface GetLocationSuccessAction {
  type: LocationActionTypes.GET_LOCATION_SUCCESS;
  payload: IOption;
}
export interface GetLocationErrorAction {
  type: LocationActionTypes.GET_LOCATION_ERROR;
  payload: string;
}

export type LocationAction =
  | GetLocationAction
  | GetLocationSuccessAction
  | GetLocationErrorAction;
