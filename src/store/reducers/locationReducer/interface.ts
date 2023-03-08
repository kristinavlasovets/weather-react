export interface LocationState {
  city: string;
  country: string;
  long: string;
  lat: string;
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
  payload: any;
}
export interface GetLocationErrorAction {
  type: LocationActionTypes.GET_LOCATION_ERROR;
  payload: string;
}

export type LocationAction =
  | GetLocationAction
  | GetLocationSuccessAction
  | GetLocationErrorAction;

// export interface LocationAction {
//   type: string;
//   payload?: any;
// }
