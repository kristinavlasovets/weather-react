import { render, screen } from "@testing-library/react";
import axios from "axios";
import Location from "..";
import { getLocationSuccessAction } from "../../../store/reducers/locationReducer/actionCreators";
import locationReducer from "../../../store/reducers/locationReducer/locationReducer";
import ReduxProvider from "../../ReduxProvider";

jest.mock("axios");

describe("get current position", () => {
  let response: any | null;
  beforeEach(() => {
    response = {
      coords: {
        accuracy: 12.874,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: 55.5133303,
        longitude: 28.6968393,
        speed: null,
      },
      timestamp: 1679334417841,
    };
  });
  test("data", () => {
    (axios.get as jest.Mock).mockReturnValue(response);
  });
});

Object.defineProperty(global.navigator, "geolocation", {
  configurable: true,
  writable: true,
  value: {
    getCurrentPosition: jest.fn().mockResolvedValueOnce({
      country: "BY",
      name: "Minsk",
      lat: 58.555,
      lon: 42.777,
    }),
  },
});

test("renders default api toggle button", () => {
  render(
    <ReduxProvider>
      <Location />
    </ReduxProvider>,
  );
  const buttonElement = screen.getByText(/openweather/i);
  expect(buttonElement).toBeInTheDocument();
});

test("renders second api toggle button", () => {
  render(
    <ReduxProvider>
      <Location />
    </ReduxProvider>,
  );
  const buttonElement = screen.getByText("weather");
  expect(buttonElement).toBeInTheDocument();
});

const locationState = {
  country: "BY",
  name: "Minsk",
  lat: 53.893009,
  lon: 27.567444,
  loading: false,
  error: null,
};

const changeLocationState = {
  country: "ES",
  name: "Mallorca",
  lat: 39.571625,
  lon: 2.650544,
  loading: false,
  error: null,
};

describe("get location", () => {
  test("get location success", () =>
    expect(
      locationReducer(
        locationState,
        getLocationSuccessAction(changeLocationState),
      ),
    ).toEqual({
      country: "ES",
      name: "Mallorca",
      lat: 39.571625,
      lon: 2.650544,
      loading: false,
      error: null,
    }));
});
