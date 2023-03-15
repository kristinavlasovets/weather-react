import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { FC } from "react";
import useAppDispatch from "../../hooks/useAppDispatch";
import {
  setOpenWeatherAction,
  setStormGlassAction,
} from "../../store/reducers/userReducer/actionCreators";

const Date: FC = () => {
  const dispatch = useAppDispatch();
  const onStormGlassApiSelect = async (value: string) => {
    dispatch(setStormGlassAction(value));
  };
  const onOpenWeatherApiSelect = async (value: string) => {
    dispatch(setOpenWeatherAction(value));
  };
  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ButtonGroup
        sx={{ mt: "10px", height: "20px" }}
        variant="text"
        color="inherit"
      >
        <Button onClick={() => onStormGlassApiSelect("stormGlass")}>
          weather
        </Button>
        <Button onClick={() => onOpenWeatherApiSelect("openWeather")}>
          openWeather
        </Button>
      </ButtonGroup>
      <Typography sx={{ color: "white" }}>
        <Box component="span" sx={{ fontSize: "54px", pr: "5px" }}>
          12:30
        </Box>
        PM
      </Typography>
      <Typography sx={{ color: "white", fontSize: "16px" }}>
        Monday, 2 February 2015
      </Typography>
    </Box>
  );
};

export default Date;
