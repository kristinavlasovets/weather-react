import React from "react";

import { Box, InputBase, Typography } from "@mui/material";

function Location() {
  return (
    <Box>
      <InputBase
        sx={{ color: "white", fontSize: "22px" }}
        placeholder="Gotenborg"
      />
      <Typography sx={{ color: "white", fontSize: "14px" }}>Sweden</Typography>
    </Box>
  );
}

export default Location;
