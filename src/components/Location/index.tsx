import { ChangeEvent, FC, useEffect, useState } from "react";

import { Box, InputBase, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import useTypedSelector from "../../hooks/useTypedSelector";
import getLocation from "../../store/action-creators/location";

const Location: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const state = useTypedSelector((state) => state.location);
  console.log(state);
  const [location, setLocation] = useState<string>("");
  const [locationOptions, setLocationOptions] = useState<[]>([]);

  const getLocationOptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => setLocationOptions(data));
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLocation(value);

    getLocationOptions(value);
  };

  const getLocationData = async () => {
    const lat = 58.7984;
    const lng = 17.8081;
    const params = "waveHeight,airTemperature";

    fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`,
      {
        headers: {
          Authorization:
            "cd04cef8-bb5c-11ed-a138-0242ac130002-cd04cf5c-bb5c-11ed-a138-0242ac130002",
        },
      },
    )
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
      });
  };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getLocation());
  // }, []);

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
        value={location}
        onChange={handleOnChange}
      />
      {locationOptions.map((option: { name: string }) => (
        <Typography>{option.name}</Typography>
      ))}
      <Typography
        sx={{ color: "white", fontSize: "14px" }}
        // onClick={getLocationData}
      >
        Sweden
      </Typography>
    </Box>
  );
};

export default Location;
