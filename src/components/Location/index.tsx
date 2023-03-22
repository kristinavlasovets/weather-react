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
import { getForecastRequestAction } from "../../store/reducers/forecastReducer/actionCreators";
import { getSecondForecastRequestAction } from "../../store/reducers/secondForecastReducer/actionCreators";
import {
  setOpenWeatherAction,
  setWeatherAction,
} from "../../store/reducers/userReducer/actionCreators";
import {
  getGeolocation,
  getWeather,
  GetWeatherPlan,
} from "../../services/openWeatherService";
import { IOption } from "../../models/IOption";
import { ILocation } from "../../models/ILocation";
import { UserStateApiTypes } from "../../store/reducers/userReducer/interface";
import useTypedSelector from "../../hooks/useTypedSelector";
import { locationSelector, userSelector } from "../../store/selectors";
import { getLocationSuccessAction } from "../../store/reducers/locationReducer/actionCreators";

const Location: FC = () => {
  const dispatch = useAppDispatch();
  const userState = useTypedSelector(userSelector);
  const locationState = useTypedSelector(locationSelector);
  const [currentLocation, setCurrentLocation] = useState<ILocation | null>(
    null,
  );
  const [location, setLocation] = useState<string>("");
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
    if (locationState.name) {
      setLocation(locationState.name);
      setLocationOptions([] as IOption[]);
    }
  }, [locationState.name]);

  const onWeatherApiSelect = () => {
    dispatch(setWeatherAction(UserStateApiTypes.WEATHER_API));
  };

  const onOpenWeatherApiSelect = () => {
    dispatch(setOpenWeatherAction(UserStateApiTypes.OPENWEATHER_API));
  };

  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLocation(value);

    if (value) {
      const response = await getGeolocation(value);
      setLocationOptions(response.data);
    }
  };

  const onOptionSelect = (option: IOption) => () => {
    dispatch(getLocationSuccessAction(option));
    const { lat, lon } = option;
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
        <Button
          onClick={onWeatherApiSelect}
          color={
            userState.api === UserStateApiTypes.WEATHER_API
              ? "primary"
              : "inherit"
          }
        >
          {UserStateApiTypes.WEATHER_API}
        </Button>
        <Button
          onClick={onOpenWeatherApiSelect}
          color={
            userState.api === UserStateApiTypes.OPENWEATHER_API
              ? "primary"
              : "inherit"
          }
        >
          {UserStateApiTypes.OPENWEATHER_API}
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
          <ListItem
            component="div"
            disablePadding
            key={option.lon}
            data-testid="option-item"
          >
            <ListItemButton onClick={onOptionSelect(option)}>
              <ListItemText>{option.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </Box>
      {locationState.name ? (
        <Typography sx={{ ml: "10px", color: "white", fontSize: "14px" }}>
          {locationState.name && locationState.country}
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
