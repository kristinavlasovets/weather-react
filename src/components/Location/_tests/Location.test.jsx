import { render, screen } from "@testing-library/react";
import ReduxProvider from "../../ReduxProvider";
import Location from "../index";

test("renders first api toggle button", () => {
  render(
    <ReduxProvider>
      <Location />
    </ReduxProvider>,
  );
  const buttonElement = screen.getByText(/weather/i);
  expect(buttonElement).toBeInTheDocument();
});
