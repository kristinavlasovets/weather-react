import { FC } from "react";

import { Box } from "@mui/material";
import DayItem from "../DayItem";
import useTypedSelector from "../../hooks/useTypedSelector";

const Forecast: FC = () => {
  const currentForecastData = useTypedSelector((state) => state.forecast);
  const currentHourlyForecastData = useTypedSelector(
    (state) => state.hourlyForecast,
  );
  const userData = useTypedSelector((state) => state.user);

  console.log(userData.api);
  console.log(currentHourlyForecastData);

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
      {userData.api === "openWeather" ? (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {currentForecastData.forecast.list && (
            <>
              <DayItem
                isFull
                temp={currentForecastData.forecast!.list[0].main.temp}
                icon={currentForecastData.forecast!.list[0].weather[0].icon}
              />
              {currentForecastData.forecast!.list.map((item) => (
                <DayItem
                  key={item.main.feels_like + 1}
                  temp={item.main.temp}
                  icon={item.weather[0].icon}
                  weekday={item.dt_txt.slice(8, 16)}
                />
              ))}
            </>
          )}
        </>
      ) : (
        <>
          <DayItem
            isFull
            temp={
              currentHourlyForecastData.hourlyForecast!.hours[0].airTemperature
                .noaa
            }
          />
          {currentHourlyForecastData.hourlyForecast!.hours.map((item) => (
            <DayItem
              key={item.time}
              temp={item.airTemperature.noaa}
              weekday={item.time.slice(8, 16)}
            />
          ))}
        </>
      )}
    </Box>
  );
};

export default Forecast;
