import { UserStateApiTypes } from "../../../store/reducers/userReducer/interface";

const dayItemIconSrcHandler = (userDataApi: string, icon: string = "") => {
  return userDataApi === UserStateApiTypes.OPENWEATHER_API
    ? `http://openweathermap.org/img/wn/${icon}@2x.png`
    : `https:${icon}`;
};

export default dayItemIconSrcHandler;
