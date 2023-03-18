import { FC } from "react";

import { Box } from "@mui/material";

import Location from "./components/Location";
import DateAndTime from "./components/DateAndTime";
import Calendar from "./components/Calendar";
import Forecast from "./components/Forecast";
import useTypedSelector from "./hooks/useTypedSelector";

import chooseWeatherHandler from "./helpers";
import { weatherConditions } from "./constants";

const App: FC = () => {
  const currentSecondForecastData = useTypedSelector(
    (state) => state.secondForecast,
  );

  const backgroundImages = chooseWeatherHandler(
    currentSecondForecastData?.secondForecast?.current?.condition?.text,
    weatherConditions,
  );

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backgroundImages.bgBack})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          width: { xs: "80%", md: "60%" },
          height: "80%",
          backgroundImage: `url(${backgroundImages.bgFront})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: 10,
        }}
      >
        <Box
          sx={{
            p: { xs: "40px 0 0 20px", md: "40px 0 0 40px" },
            width: "100%",
            height: "20%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <DateAndTime />
          <Location />
        </Box>
        <Calendar />
        <Forecast />
      </Box>
    </Box>
  );
};

export default App;
