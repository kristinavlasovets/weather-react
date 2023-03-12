import { FC } from "react";

import { Box } from "@mui/material";
import DayItem from "../DayItem";
import useTypedSelector from "../../hooks/useTypedSelector";

const Forecast: FC = () => {
  const currentForecastData = useTypedSelector((state) => state.forecast);

  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "100%",
        height: "30%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "rgba(38, 45, 65, 0.75)",
      }}
    >
      <DayItem isFull />
      {currentForecastData.forecast.list.slice(1, 7).map((item) => (
        <DayItem key={item.main.feels_like} temp={item.main.temp} />
      ))}
    </Box>
  );
};

export default Forecast;
