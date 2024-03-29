import { FC } from "react";

import { Box, Chip, Typography } from "@mui/material";

import useTypedSelector from "../../hooks/useTypedSelector";
import { userSelector } from "../../store/selectors";

import { DayItemProps } from "./interface";
import dayItemIconSrcHandler from "./helpers";

const DayItem: FC<DayItemProps> = ({ isFull = false, temp, icon, weekday }) => {
  const userData = useTypedSelector(userSelector);
  return (
    <Box
      sx={{
        height: isFull ? "50%" : "60%",
        width: isFull ? "150px" : "80px",
        pl: "25px",
        display: "flex",
        flexDirection: isFull ? "row" : "column",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      {isFull ? (
        <>
          <Box
            component="img"
            sx={{
              height: 100,
              width: 100,
              maxHeight: { xs: 75, md: 100 },
              maxWidth: { xs: 75, md: 100 },
            }}
            src={dayItemIconSrcHandler(userData.api, icon)}
            alt="icon"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Chip
              sx={{ mb: "5px", backgroundColor: "#262D41", color: "white" }}
              label="Today"
            />
            <Typography sx={{ fontSize: "32px" }}>
              {Math.round(temp)}°
            </Typography>
          </Box>
        </>
      ) : (
        <>
          <Chip
            sx={{
              padding: "5px 0px 5px 0px",
              backgroundColor: "#262D41",
              color: "white",
            }}
            label={weekday}
          />
          <Box
            component="img"
            sx={{
              height: 75,
              width: 75,
              maxHeight: { xs: 55, md: 75 },
              maxWidth: { xs: 55, md: 75 },
            }}
            src={dayItemIconSrcHandler(userData.api, icon)}
            alt="icon"
          />
          <Typography>{Math.round(temp)}°</Typography>
        </>
      )}
    </Box>
  );
};

export default DayItem;
