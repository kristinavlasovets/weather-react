import { render, screen } from "@testing-library/react";
import ReduxProvider from "../../ReduxProvider";
import Calendar from "../index";

test("login button", () => {
  render(
    <ReduxProvider>
      <Calendar />
    </ReduxProvider>,
  );
  const buttonElement = screen.getByText(/Log in to Google Calendar/i);
  expect(buttonElement).toBeInTheDocument();
});
