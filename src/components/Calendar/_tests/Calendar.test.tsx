import { render, screen } from "@testing-library/react";
import ReduxProvider from "../../ReduxProvider";
import Calendar from "../index";

test("login button", () => {
  render(
    <ReduxProvider>
      <Calendar />
    </ReduxProvider>,
  );
  const logInButtonElement = screen.getByText(/log in to google calendar/i);
  expect(logInButtonElement).toBeInTheDocument();
});
// test("check button", () => {
//   render(
//     <ReduxProvider>
//       <Calendar />
//     </ReduxProvider>,
//   );
//   const checkButtonElement = screen.getByText(/check my google calendar/i);
//   expect(checkButtonElement).toBeInTheDocument();
// });
// test("logout button", () => {
//   render(
//     <ReduxProvider>
//       <Calendar />
//     </ReduxProvider>,
//   );
//   const logOutButtonElement = screen.getByText(/log out/i);
//   expect(logOutButtonElement).toBeInTheDocument();
// });
