import { FC } from "react";

import { Box } from "@mui/material";
import DayItem from "../DayItem";

const Forecast: FC = () => {
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
      {Array(6)
        .fill("12")
        .map((item) => (
          <DayItem key={item} />
        ))}
    </Box>
  );
};

export default Forecast;
