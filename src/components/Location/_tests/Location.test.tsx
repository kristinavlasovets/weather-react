import { render, screen } from "@testing-library/react";
import axios from "axios";
import Location from "..";
import { IOption } from "../../../models/IOption";
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

// describe("get location options", () => {
//   let response: IOption;
//   beforeEach(() => {
//     response = {
//       country: "BY",
//       name: "Minsk",
//       lat: 58.555,
//       lon: 42.777,
//     };
//   });
//   test("location options", async () => {
//     (axios.get as jest.Mock).mockReturnValue(response);
//     render(
//       <ReduxProvider>
//         <Location />
//       </ReduxProvider>,
//     );
//     expect(axios.get).toBeCalledTimes(1);
//   });
// });

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
