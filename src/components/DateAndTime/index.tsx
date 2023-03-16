import { Box, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import useAppDispatch from "../../hooks/useAppDispatch";

const DateAndTime: FC = () => {
  const dispatch = useAppDispatch();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const currentDateAndTime = new Date(position.timestamp);
      setDate(currentDateAndTime.toDateString());
      setTime(currentDateAndTime.toLocaleTimeString());
    });
  }, [dispatch]);
  return (
    <Box
      sx={{
        margin: "10px auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ color: "white", fontSize: "54px" }}>
        {time.slice(0, 5)}
      </Typography>
      <Typography sx={{ pl: "10px", color: "white", fontSize: "16px" }}>
        {date}
      </Typography>
    </Box>
  );
};

export default DateAndTime;
