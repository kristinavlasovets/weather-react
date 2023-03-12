import { FC } from "react";

import { Box, Chip, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { DayItemProps } from "./interface";
import useTypedSelector from "../../hooks/useTypedSelector";

const DayItem: FC<DayItemProps> = ({ isFull = false, temp }) => {
  const currentForecastData = useTypedSelector((state) => state.forecast);

  // const week = currentForecastData.forecast.list.slice(1, 7);

  return (
    <Box
      sx={{
        height: isFull ? "50%" : "60%",
        width: isFull ? "150px" : "70px",
        pl: isFull ? "20px" : "5px",
        display: "flex",
        flexDirection: isFull ? "row" : "column",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      {isFull ? (
        <>
          <WbSunnyIcon
            sx={{ color: "orange", height: "55px", width: "55px" }}
            fontSize="large"
          />
          <Box
            sx={{
              ml: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Chip
              sx={{ mb: "5px", backgroundColor: "#262D41", color: "white" }}
              label="Today"
            />
            <Typography sx={{ fontSize: "32px" }}>
              {Math.round(currentForecastData?.forecast.list[0].main.temp)}°
            </Typography>
          </Box>
        </>
      ) : (
        <>
          <Chip
            sx={{ backgroundColor: "#262D41", color: "white" }}
            label="Tue"
          />
          <WbSunnyIcon />
          <Typography>{Math.round(temp)}°</Typography>
        </>
      )}
    </Box>
  );
};

export default DayItem;
