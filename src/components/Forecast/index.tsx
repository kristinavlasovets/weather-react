import { FC } from "react";

import { Box } from "@mui/material";
import DayItem from "../DayItem";
import useTypedSelector from "../../hooks/useTypedSelector";
import Skeleton from "../DayItem/skeleton";

const Forecast: FC = () => {
  const currentForecastData = useTypedSelector((state) => state.forecast);
  const currentSecondForecastData = useTypedSelector(
    (state) => state.secondForecast,
  );
  const userData = useTypedSelector((state) => state.user);

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "100%",
        maxWidth: "100%",
        overflow: "auto",
        height: "30%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "rgba(135, 135, 135, 0.85)",
      }}
    >
      {currentForecastData.loading ||
        (currentSecondForecastData.loading &&
          [...new Array(7)].map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Skeleton key={index} />
          )))}
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
                  key={item.dt_txt}
                  temp={item.main.temp}
                  icon={item.weather[0].icon}
                  weekday={item.dt_txt.slice(8, 16)}
                />
              ))}
            </>
          )}
        </>
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {currentSecondForecastData.secondForecast && (
            <>
              <DayItem
                isFull
                temp={
                  currentSecondForecastData.secondForecast.current.temp_c ||
                  currentSecondForecastData.secondForecast.current.temp_f
                }
                icon={
                  currentSecondForecastData.secondForecast.current.condition
                    .icon
                }
              />
              {currentSecondForecastData.secondForecast.forecast.forecastday.map(
                (item) => (
                  <DayItem
                    key={item.date}
                    temp={item.day.avgtemp_c}
                    icon={item.day.condition.icon}
                    weekday={item.date.slice(8, 10)}
                  />
                ),
              )}
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default Forecast;
