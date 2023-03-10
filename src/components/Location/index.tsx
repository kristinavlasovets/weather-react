import { ChangeEvent, FC, useEffect, useState } from "react";
import axios from "axios";

import {
  Box,
  InputBase,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import useTypedSelector from "../../hooks/useTypedSelector";
import { IOption } from "../../models/IOption";
import { ILocation } from "../../models/ILocation";

const Location: FC = () => {
  const locationState = useTypedSelector((state) => state.location);

  const [currentLocation, setCurrentLocation] = useState<ILocation | null>(
    null,
  );
  const [location, setLocation] = useState<string>("");
  const [city, setCity] = useState<IOption | null>(null);
  const [locationOptions, setLocationOptions] = useState<IOption[]>([]);

  const getLocationOptions = async (value: string) => {
    return axios(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
    );
  };

  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLocation(value);

    if (!value) {
      return;
    }

    const response = await getLocationOptions(value);
    console.log(response.data);
    setLocationOptions(response.data);
  };

  const getForecast = (option: IOption) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${option.lat}&lon=${option.lon}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => console.log({ data }));
  };

  const onOptionSelect = async (option: IOption) => {
    setCity(option);
    getForecast(option);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
      )
        .then((res) => res.json())
        .then((data) => setCurrentLocation(data));
    });
  }, []);
  useEffect(() => {
    if (city) {
      setLocation(city.name);
      setLocationOptions([]);
    }
  }, [city]);

  return (
    <Box
      sx={{
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
      <Typography sx={{ color: "white", fontSize: "14px" }}>
        {currentLocation?.sys.country}
      </Typography>
    </Box>
  );
};

export default Location;
