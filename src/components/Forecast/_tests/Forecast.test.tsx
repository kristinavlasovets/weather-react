import { render } from "@testing-library/react";
import * as reduxHooks from "react-redux";

import ReduxProvider from "../../ReduxProvider";
import Forecast from "../index";

jest.mock("react-redux");
const mockedUseSelector = jest.spyOn(reduxHooks, "useSelector");
const forecastData = {
  city: {
    name: "Seredoma",
    country: "BY",
    sunrise: 1679371570,
    sunset: 1679415532,
  },
  list: [
    {
      dt_txt: "2023-03-21 21:00:00",
      main: {
        feels_like: 1.15,
        humidity: 96,
        temp: 3.27,
        temp_max: 4,
        temp_min: 3,
      },
      weather: [
        { main: "Clouds", icon: "04n", description: "overcast clouds" },
      ],
    },
  ],
};
describe("currentForecastData", () => {
  test("work with an empty state", () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <ReduxProvider>
        <Forecast />
      </ReduxProvider>,
    );
    expect(component).toMatchSnapshot();
  });
  test("work with filled state", () => {
    mockedUseSelector.mockReturnValue(forecastData);
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <ReduxProvider>
        <Forecast />
      </ReduxProvider>,
    );
    expect(component).toMatchSnapshot();
  });
});
