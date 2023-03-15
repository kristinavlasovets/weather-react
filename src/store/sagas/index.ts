import { AxiosResponse } from "axios";
import { call, put, takeEvery, fork, all } from "redux-saga/effects";
import { IForecast } from "../../models/IForecast";
import { IHourlyForecast } from "../../models/IHourlyForecast";
import { ISecondForecast } from "../../models/ISecondForecast";
import { getWeather } from "../../services/openWeatherService";
import { getHourlyWeather } from "../../services/stormGlassService";
import { getSecondWeather } from "../../services/weatherService";
import { getForecastSuccessAction } from "../reducers/forecastReducer/actionCreators";
import {
  ForecastActionTypes,
  GetForecastRequest,
} from "../reducers/forecastReducer/interface";
import { getHourlyForecastSuccessAction } from "../reducers/hourlyForecastReducer/actionCreators";
import {
  GetHourlyForecastRequest,
  HourlyForecastActionTypes,
} from "../reducers/hourlyForecastReducer/interface";
import { getSecondForecastSuccessAction } from "../reducers/secondForecastReducer/actionCreators";
import {
  GetSecondForecastRequest,
  SecondForecastActionTypes,
} from "../reducers/secondForecastReducer/interface";

export function* getOpenWeatherForecast(action: GetForecastRequest) {
  const { payload } = action;
  const response: AxiosResponse<IForecast> = yield call(getWeather, payload);
  yield put(getForecastSuccessAction(response.data));
}

export function* watchOpenWeatherForecastSaga() {
  yield takeEvery(
    ForecastActionTypes.GET_FORECAST_REQUEST,
    getOpenWeatherForecast,
  );
}
export function* getWeatherForecast(action: GetSecondForecastRequest) {
  const { payload } = action;
  const response: AxiosResponse<ISecondForecast> = yield call(
    getSecondWeather,
    payload,
  );
  yield put(getSecondForecastSuccessAction(response.data));
}

export function* watchWeatherForecastSaga() {
  yield takeEvery(
    SecondForecastActionTypes.GET_SECOND_FORECAST_REQUEST,
    getWeatherForecast,
  );
}

// export function* getStormGlassForecast(action: GetHourlyForecastRequest) {
//   const { payload } = action;
//   const response: AxiosResponse<IHourlyForecast> = yield call(
//     getHourlyWeather,
//     payload,
//   );
//   yield put(getHourlyForecastSuccessAction(response.data));
// }

// export function* watchStormGlassForecastSaga() {
//   yield takeEvery(
//     HourlyForecastActionTypes.GET_HOURLY_FORECAST_REQUEST,
//     getStormGlassForecast,
//   );
// }

export default function* rootSaga() {
  yield all([
    fork(watchOpenWeatherForecastSaga),
    fork(watchWeatherForecastSaga),
  ]);
}
