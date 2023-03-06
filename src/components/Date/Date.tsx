import { Box, Typography } from "@mui/material";
import React from "react";

function Date() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ ml: 1, color: "white", fontSize: "42px" }}>
        12:30 pm
      </Typography>
      <Typography sx={{ ml: 1, color: "white", fontSize: "22px" }}>
        Monday, 2 February 2015
      </Typography>
    </Box>
  );
}

export default Date;
