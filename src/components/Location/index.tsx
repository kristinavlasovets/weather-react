import { ChangeEvent, FC, useEffect, useState } from "react";

import {
  Box,
  InputBase,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";

import useAppDispatch from "../../hooks/useAppDispatch";
import { IOption } from "../../models/IOption";
import { ILocation } from "../../models/ILocation";
import {
  getGeolocation,
  getWeather,
  GetWeatherPlan,
} from "../../services/openWeatherService";
import { getForecastRequestAction } from "../../store/reducers/forecastReducer/actionCreators";
import { getSecondForecastRequestAction } from "../../store/reducers/secondForecastReducer/actionCreators";
import {
  setOpenWeatherAction,
  setWeatherAction,
} from "../../store/reducers/userReducer/actionCreators";

const Location: FC = () => {
  const dispatch = useAppDispatch();

  const [currentLocation, setCurrentLocation] = useState<ILocation | null>(
    null,
  );
  const [location, setLocation] = useState<string>("");
  const [city, setCity] = useState<IOption | null>(null);
  const [locationOptions, setLocationOptions] = useState<IOption[]>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude: lat, longitude: lon } = position.coords;
      const response = await getWeather<ILocation>({
        lon,
        lat,
        plan: GetWeatherPlan.WEATHER,
      });
      setCurrentLocation(response.data);
      dispatch(getSecondForecastRequestAction({ lat, lon }));
      dispatch(
        getForecastRequestAction({ plan: GetWeatherPlan.FORECAST, lon, lat }),
      );
    });
  }, [dispatch]);

  useEffect(() => {
    if (city) {
      setLocation(city.name);
      setLocationOptions([]);
    }
  }, [city]);

  const onWeatherApiSelect = async (value: string) => {
    dispatch(setWeatherAction(value));
  };
  const onOpenWeatherApiSelect = async (value: string) => {
    dispatch(setOpenWeatherAction(value));
  };

  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLocation(value);

    if (value) {
      const response = await getGeolocation(value);
      setLocationOptions(response.data);
    }
  };

  const onOptionSelect = async (option: IOption) => {
    setCity(option);
    const { lon, lat } = option;
    dispatch(getSecondForecastRequestAction({ lat, lon }));
    dispatch(
      getForecastRequestAction({ plan: GetWeatherPlan.FORECAST, lon, lat }),
    );
  };
  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <ButtonGroup
        sx={{ mb: "10px", color: "white", height: "20px" }}
        variant="text"
        color="inherit"
      >
        <Button onClick={() => onWeatherApiSelect("stormGlass")}>
          weather
        </Button>
        <Button onClick={() => onOpenWeatherApiSelect("openWeather")}>
          openWeather
        </Button>
      </ButtonGroup>
      <InputBase
        sx={{ ml: "10px", color: "white", fontSize: "22px" }}
        placeholder={currentLocation?.name}
        value={location}
        onChange={handleOnChange}
      />
      <Box
        sx={{
          width: "80%",
          maxHeight: 400,
          maxWidth: 300,
          bgcolor: "background.paper",
          position: "absolute",
          top: "70px",
          left: "10px",
        }}
      >
        {locationOptions.map((option) => (
          <ListItem component="div" disablePadding key={option.lon}>
            <ListItemButton onClick={() => onOptionSelect(option)}>
              <ListItemText>{option.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </Box>
      {city ? (
        <Typography sx={{ ml: "10px", color: "white", fontSize: "14px" }}>
          {city && city.country}
        </Typography>
      ) : (
        <Typography sx={{ ml: "10px", color: "white", fontSize: "14px" }}>
          {currentLocation?.sys.country}
        </Typography>
      )}
    </Box>
  );
};

export default Location;
