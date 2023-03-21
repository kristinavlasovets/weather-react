import { render } from "@testing-library/react";
import useTypedSelector from "../../../hooks/useTypedSelector";
import ReduxProvider from "../../ReduxProvider";
import Forecast from "../index";

jest.mock("react-redux");

describe("currentForecastData", () => {
  test("work with an empty state", () => {
    useTypedSelector.mockReturnValue({});

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <ReduxProvider>
        <Forecast />
      </ReduxProvider>,
    );
    expect(component).toMatchSnapshot();
  });
});
