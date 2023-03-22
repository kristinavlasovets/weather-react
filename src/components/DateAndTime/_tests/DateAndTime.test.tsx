import { screen, render } from "@testing-library/react";
import ReduxProvider from "../../ReduxProvider";
import DateAndTime from "../index";

test("current date and atime", () => {
  const mockDate = new Date();
  jest
    .spyOn(global, "Date")
    .mockImplementation(() => mockDate as unknown as string);

  render(
    <ReduxProvider>
      <DateAndTime />
    </ReduxProvider>,
  );
  const myTime = screen.getByTestId("time");
  expect(myTime).toHaveTextContent(mockDate.toTimeString().slice(0, 8));
  const myDate = screen.getByTestId("date");
  expect(myDate).toHaveTextContent(mockDate.toDateString().slice(0, 15));
});
