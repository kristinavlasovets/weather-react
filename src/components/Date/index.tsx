import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { FC } from "react";

const Date: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ButtonGroup
        sx={{ mt: "10px", height: "20px" }}
        variant="text"
        color="inherit"
      >
        <Button>stormglass</Button>
        <Button>openweather</Button>
      </ButtonGroup>
      <Typography sx={{ color: "white" }}>
        <Box component="span" sx={{ fontSize: "54px", pr: "5px" }}>
          12:30
        </Box>
        PM
      </Typography>
      <Typography sx={{ ml: 1, color: "white", fontSize: "16px" }}>
        Monday, 2 February 2015
      </Typography>
    </Box>
  );
};

export default Date;
