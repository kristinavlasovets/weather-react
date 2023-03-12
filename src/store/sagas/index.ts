import { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { IForecast } from "../../models/IForecast";
import { getWeather } from "../../services/openWeatherService";
import { getForecastSuccessAction } from "../reducers/forecastReducer/actionCreators";
import {
  ForecastActionTypes,
  GetForecastRequest,
} from "../reducers/forecastReducer/interface";

export function* workerSaga(action: GetForecastRequest) {
  const { payload } = action;
  const response: AxiosResponse<IForecast> = yield call(getWeather, payload);
  yield put(getForecastSuccessAction(response.data));
}

export function* watchClickSaga() {
  yield takeEvery(ForecastActionTypes.GET_FORECAST_REQUEST, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
