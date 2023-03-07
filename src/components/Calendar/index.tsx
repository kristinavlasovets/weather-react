import { FC } from "react";

import { Box, Chip, List, ListItem, ListItemText } from "@mui/material";

const Calendar: FC = () => {
  return (
    <Box
      sx={{
        p: "20px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <List sx={{ ml: 1, color: "white", fontSize: "32px" }}>
        <ListItem disablePadding>
          <Chip sx={{ color: "white", mr: "10px" }} label="8:00" size="small" />
          <ListItemText primary="Check Dribble popular pages" />
        </ListItem>
        <ListItem disablePadding>
          <Chip
            sx={{ color: "white", mr: "10px" }}
            label="12:00"
            size="small"
          />
          <ListItemText primary="Make Dribble shot" />
        </ListItem>
        <ListItem disablePadding>
          <Chip
            sx={{ color: "white", mr: "10px" }}
            label="21:00"
            size="small"
          />
          <ListItemText primary="Check if you are on the popular page" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Calendar;
