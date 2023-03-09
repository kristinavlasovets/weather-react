import { FunctionComponent } from "react";
import { Provider } from "react-redux";

import { store } from "../../store";

import { ReduxProviderProps } from "./interface";

const ReduxProvider: FunctionComponent<ReduxProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
