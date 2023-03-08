import { ChangeEvent, FC, useState } from "react";

import { Box, InputBase, Typography } from "@mui/material";
import debounce from "lodash.debounce";

const Location: FC = () => {
  const [location, setLocation] = useState<string>("");

  const handleOnChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    console.log(location);
  }, 600);

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
        // loadOptions={loadOptions}
      />
      <Typography
        sx={{ color: "white", fontSize: "14px" }}
        onClick={getLocationData}
      >
        Sweden
      </Typography>
    </Box>
  );
};

export default Location;
