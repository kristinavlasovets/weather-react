import { FC, useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";

const DateAndTime: FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        margin: "10px auto",
        pl: { xs: "20px", md: "40px" },
        width: { xs: "70%", md: "100%" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{ color: "white", fontSize: { xs: "36px", md: "54px" } }}
        data-testid="time"
      >
        {date?.toTimeString().slice(0, 8)}
      </Typography>
      <Typography
        sx={{
          pl: "10px",
          color: "white",
          fontSize: { xs: "14px", md: "20px" },
        }}
        data-testid="date"
      >
        {date?.toDateString().slice(0, 15)}
      </Typography>
    </Box>
  );
};

export default DateAndTime;
