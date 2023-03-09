import { ChangeEvent, FC, useState } from "react";
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

const Location: FC = () => {
  const locat = useTypedSelector((state) => state.location);

  const [location, setLocation] = useState<string>("");
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

  const onOptionSelect = (option: IOption) => {
    console.log(option.name);
  };

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
        placeholder="Gotenborg"
        value={location}
        onChange={handleOnChange}
      />{" "}
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
