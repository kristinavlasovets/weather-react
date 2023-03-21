import defaultFront from "../assets/images/defaultFront.png";
import defaultBack from "../assets/images/defaultBack.png";
import sunnyFront from "../assets/images/sunnyFront.png";
import sunnyBack from "../assets/images/sunnyBack.png";
import partlyCloudyFront from "../assets/images/partlyCloudyFront.png";
import partlyCloudyBack from "../assets/images/partlyCloudyBack.png";
import cloudyFront from "../assets/images/cloudyFront.png";
import cloudyBack from "../assets/images/cloudyBack.png";
import lightRainFront from "../assets/images/lightRainFront.png";
import lightRainBack from "../assets/images/lightRainBack.png";
import moderateRainFront from "../assets/images/moderateRainFront.png";
import moderateRainBack from "../assets/images/moderateRainBack.png";
import clearFront from "../assets/images/clearFront.png";
import clearBack from "../assets/images/clearBack.png";
import snowFront from "../assets/images/snowFront.png";
import snowBack from "../assets/images/snowBack.png";
import overcastFront from "../assets/images/overcastFront.png";
import overcastBack from "../assets/images/overcastBack.png";
import fogFront from "../assets/images/fogFront.png";
import fogBack from "../assets/images/fogBack.png";

export const weatherConditions = {
  sunny: {
    bgFront: sunnyFront,
    bgBack: sunnyBack,
  },
  partlyCloudy: {
    bgFront: partlyCloudyFront,
    bgBack: partlyCloudyBack,
  },
  cloudy: {
    bgFront: cloudyFront,
    bgBack: cloudyBack,
  },
  lightRain: {
    bgFront: lightRainFront,
    bgBack: lightRainBack,
  },
  moderateRain: {
    bgFront: moderateRainFront,
    bgBack: moderateRainBack,
  },
  clear: {
    bgFront: clearFront,
    bgBack: clearBack,
  },
  snow: {
    bgFront: snowFront,
    bgBack: snowBack,
  },
  overcast: {
    bgFront: overcastFront,
    bgBack: overcastBack,
  },
  fog: {
    bgFront: fogFront,
    bgBack: fogBack,
  },
  default: {
    bgFront: defaultFront,
    bgBack: defaultBack,
  },
};

export type WeatherConditions = typeof weatherConditions;
