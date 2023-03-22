import { AxiosResponse } from "axios";
import { call, put, takeEvery, fork, all } from "redux-saga/effects";

import { IForecast } from "../../models/IForecast";
import { ISecondForecast } from "../../models/ISecondForecast";
import { getWeather } from "../../services/openWeatherService";
import { getSecondWeather } from "../../services/weatherService";
import {
  getForecastErrorAction,
  getForecastSuccessAction,
} from "../reducers/forecastReducer/actionCreators";
import {
  ForecastActionTypes,
  GetForecastRequest,
} from "../reducers/forecastReducer/interface";
import {
  getSecondForecastErrorAction,
  getSecondForecastSuccessAction,
} from "../reducers/secondForecastReducer/actionCreators";
import {
  GetSecondForecastRequest,
  SecondForecastActionTypes,
} from "../reducers/secondForecastReducer/interface";

export function* getOpenWeatherForecast(action: GetForecastRequest) {
  try {
    const { payload } = action;
    const response: AxiosResponse<IForecast> = yield call(getWeather, payload);
    yield put(getForecastSuccessAction(response.data));
  } catch (e: any) {
    yield put(getForecastErrorAction(e.message));
  }
}

export function* watchOpenWeatherForecastSaga() {
  yield takeEvery(
    ForecastActionTypes.GET_FORECAST_REQUEST,
    getOpenWeatherForecast,
  );
}
export function* getWeatherForecast(action: GetSecondForecastRequest) {
  try {
    const { payload } = action;
    const response: AxiosResponse<ISecondForecast> = yield call(
      getSecondWeather,
      payload,
    );
    yield put(getSecondForecastSuccessAction(response.data));
  } catch (e: any) {
    yield put(getSecondForecastErrorAction(e.message));
  }
}

export function* watchWeatherForecastSaga() {
  yield takeEvery(
    SecondForecastActionTypes.GET_SECOND_FORECAST_REQUEST,
    getWeatherForecast,
  );
}

export default function* rootSaga() {
  yield all([
    fork(watchOpenWeatherForecastSaga),
    fork(watchWeatherForecastSaga),
  ]);
}
