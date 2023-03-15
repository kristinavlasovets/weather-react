import { ChangeEvent, FC, useEffect, useState } from "react";

import {
  Box,
  InputBase,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import useAppDispatch from "../../hooks/useAppDispatch";
import { IOption } from "../../models/IOption";
import { ILocation } from "../../models/ILocation";
import { IForecast } from "../../models/IForecast";
import {
  getGeolocation,
  getWeather,
  GetWeatherPlan,
} from "../../services/openWeatherService";
import { getForecastRequestAction } from "../../store/reducers/forecastReducer/actionCreators";
import useTypedSelector from "../../hooks/useTypedSelector";
import { getHourlyWeather } from "../../services/stormGlassService";
import { getHourlyForecastRequestAction } from "../../store/reducers/hourlyForecastReducer/actionCreators";

const Location: FC = () => {
  const dispatch = useAppDispatch();
  const currentForecastData = useTypedSelector((state) => state.forecast);
  const currentHourlyForecastData = useTypedSelector(
    (state) => state.hourlyForecast,
  );
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

  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLocation(value);

    if (value) {
      const response = await getGeolocation(value);
      setLocationOptions(response.data);
    }
  };

  const getForecast = async (option: IOption) => {
    const { lat, lon } = option;
    const response = await getWeather<IForecast>({
      lon,
      lat,
      plan: GetWeatherPlan.FORECAST,
    });

    // const { list, city: cityData } = response.data;

    // setForecast({ list, city: cityData });
  };

  const onOptionSelect = async (option: IOption) => {
    setCity(option);
    getForecast(option);
    const { lon, lat } = option;
    dispatch(getHourlyForecastRequestAction({ lat, lng: lon }));
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
      <InputBase
        sx={{ color: "white", fontSize: "22px" }}
        placeholder={currentLocation?.name}
        value={location}
        onChange={handleOnChange}
      />
      <Box
        sx={{
          width: "100%",
          maxHeight: 400,
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "absolute",
          top: "40px",
          left: "-20px",
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
        <Typography sx={{ color: "white", fontSize: "14px" }}>
          {city && city.country}
        </Typography>
      ) : (
        <Typography sx={{ color: "white", fontSize: "14px" }}>
          {currentLocation?.sys.country}
        </Typography>
      )}
    </Box>
  );
};

export default Location;
