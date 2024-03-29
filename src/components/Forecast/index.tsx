import { FC } from "react";

import { Box } from "@mui/material";
import DayItem from "../DayItem";
import Skeleton from "../DayItem/skeleton";

import useTypedSelector from "../../hooks/useTypedSelector";
import {
  forecastSelector,
  secondForecastSelector,
  userSelector,
} from "../../store/selectors";
import { UserStateApiTypes } from "../../store/reducers/userReducer/interface";

const Forecast: FC = () => {
  const currentForecastData = useTypedSelector(forecastSelector);
  const currentSecondForecastData = useTypedSelector(secondForecastSelector);
  const userData = useTypedSelector(userSelector);

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "100%",
        maxWidth: "100%",
        overflow: "auto",
        height: "40%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "rgba(54, 56, 61, 0.85)",
      }}
    >
      {currentForecastData.loading &&
        [...new Array(7)].map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Skeleton key={index} />
        ))}
      {userData.api === UserStateApiTypes.OPENWEATHER_API &&
        currentForecastData.forecast.list && (
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
      {userData.api === UserStateApiTypes.WEATHER_API &&
        currentSecondForecastData.secondForecast.current && (
          <>
            <DayItem
              isFull
              temp={
                currentSecondForecastData.secondForecast.current.temp_c ||
                currentSecondForecastData.secondForecast.current.temp_f
              }
              icon={
                currentSecondForecastData.secondForecast.current.condition.icon
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
    </Box>
  );
};

export default Forecast;
