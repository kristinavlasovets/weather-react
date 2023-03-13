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

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "100%",
        height: "30%",
        display: "flex",
        justifyContent: "space-evenly",
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
          {forecast!.list.slice(1, 7).map((item) => (
            <DayItem
              key={item.main.feels_like}
              temp={item.main.temp}
              icon={item.weather[0].icon}
              weekday={new Date(item.dt_txt).getDay()}
            />
          ))}
        </>
      )}
    </Box>
  );
};

export default Forecast;
