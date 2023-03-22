import { RootState } from "../index";

export const forecastSelector = (state: RootState) => state.forecast;
export const secondForecastSelector = (state: RootState) =>
  state.secondForecast;
export const userSelector = (state: RootState) => state.user;
export const locationSelector = (state: RootState) => state.location;
