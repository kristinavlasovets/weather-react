import { render, screen } from "@testing-library/react";
import axios from "axios";

jest.mock("axios");

describe("getCurrentPosition", () => {
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
