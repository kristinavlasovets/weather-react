import { WeatherConditions } from "../constants";

const chooseWeatherHandler = (condition: string, object: WeatherConditions) => {
  switch (condition) {
    case "Sunny":
      return object.sunny;
    case "Partly cloudy":
      return object.partlyCloudy;
    case "Cloudy":
      return object.cloudy;
    case "Light rain":
      return object.lightRain;
    case "Moderate rain":
      return object.moderateRain;
    case "Clear":
      return object.clear;
    case "Moderate or heavy snow showers":
      return object.snow;
    case "Overcast":
      return object.overcast;
    case "Fog":
      return object.fog;
    default:
      return object.default;
  }
};

export default chooseWeatherHandler;
