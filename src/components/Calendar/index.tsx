import { FC } from "react";
import ApiCalendar from "react-google-calendar-api";

import { Box, Button, Chip, List, ListItem, ListItemText } from "@mui/material";

const Calendar: FC = () => {
  const config = {
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    apiKey: process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY,
    scope: "https://www.googleapis.com/auth/calendar",
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ],
  };

  const apiCalendar = new ApiCalendar(config);

  const handleOnLogin = () => {
    apiCalendar.handleAuthClick();
    console.log("click");
    apiCalendar
      .listEvents({
        // timeMin: new Date()..toISOString(),
        // timeMax: new Date().addDays(10).toISOString(),
        showDeleted: true,
        maxResults: 10,
        orderBy: "updated",
      })
      .then(({ result }: any) => {
        console.log(result.items);
      });
  };
  return (
    <Box
      sx={{
        margin: "0 auto",
        width: "100%",
      }}
    >
      <Button sx={{ p: "20px", color: "white" }} onClick={handleOnLogin}>
        Check my Google Calendar
      </Button>
      <List sx={{ pl: "20px", color: "white", fontSize: "32px" }}>
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
