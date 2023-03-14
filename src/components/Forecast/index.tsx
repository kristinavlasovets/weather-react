import { FC, useEffect, useState } from "react";

import { Box } from "@mui/material";
import DayItem from "../DayItem";
import useTypedSelector from "../../hooks/useTypedSelector";
import { IForecast } from "../../models/IForecast";

const Forecast: FC = () => {
  const currentForecastData = useTypedSelector((state) => state.forecast);

  const [forecast, setForecast] = useState<IForecast>({} as IForecast);

  useEffect(() => {
    setForecast(currentForecastData.forecast);
  }, [currentForecastData, forecast]);

  if (forecast && forecast.list) {
    const filteredForecastDay = forecast!.list
      .map((item) => item.dt_txt.slice(0, 10))
      .filter((elem, i, arr) => arr.indexOf(elem) === i);
    // console.log(filteredForecastDay);
    // console.log(forecast);
  }

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "100%",
        maxWidth: "100%",
        overflow: "scroll",
        height: "30%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "rgba(135, 135, 135, 0.85)",
      }}
    >
      {forecast.list && (
        <>
          <DayItem
            isFull
            temp={forecast!.list[0].main.temp}
            icon={forecast!.list[0].weather[0].icon}
          />
          {forecast!.list.map((item) => (
            <DayItem
              key={item.main.feels_like + 1}
              temp={item.main.temp}
              icon={item.weather[0].icon}
              weekday={item.dt_txt.slice(8, 16)}
            />
          ))}
        </>
      )}
    </Box>
  );
};

export default Forecast;
