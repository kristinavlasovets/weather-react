import { FC } from "react";

import { Box, InputBase, Typography } from "@mui/material";

const Location: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <InputBase
        sx={{ color: "white", fontSize: "22px" }}
        placeholder="Gotenborg"
      />
      <Typography sx={{ color: "white", fontSize: "14px" }}>Sweden</Typography>
    </Box>
  );
};

export default Location;
