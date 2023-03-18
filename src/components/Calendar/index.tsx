import { FC, useState, useEffect } from "react";

import {
  Box,
  Button,
  ButtonGroup,
  Chip,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import useAppDispatch from "../../hooks/useAppDispatch";
import { setIsLoginAction } from "../../store/reducers/userReducer/actionCreators";
import useTypedSelector from "../../hooks/useTypedSelector";
import { ICalendar } from "../../models/ICalendar";
import apiCalendar from "../../http/googleCalendar_api";

const Calendar: FC = () => {
  const dispatch = useAppDispatch();
  const isLogin = useTypedSelector((state) => state.user.isLogin);

  const [events, setEvents] = useState<ICalendar[]>([]);

  const handleOnLogin = () => {
    apiCalendar.handleAuthClick();
    dispatch(setIsLoginAction(true));
  };
  const handleOnLogout = () => {
    apiCalendar.handleSignoutClick();
    dispatch(setIsLoginAction(false));
  };
  const handleCheckEvents = () => {
    apiCalendar
      .listUpcomingEvents(10)
      .then(({ result }: any) => setEvents(result.items));
  };

  return (
    <Box
      sx={{
        ml: { xs: "20px", md: "40px" },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <ButtonGroup sx={{ height: "20px" }} variant="text" color="inherit">
        {isLogin ? (
          <>
            <Button sx={{ color: "white" }} onClick={handleCheckEvents}>
              Check my Google Calendar
            </Button>
            <Button onClick={handleOnLogout}>Log out</Button>
          </>
        ) : (
          <Button sx={{ color: "white" }} onClick={handleOnLogin}>
            Log in to Google Calendar
          </Button>
        )}
      </ButtonGroup>
      <List
        sx={{
          color: "white",
          fontSize: "32px",
          height: "200px",
          width: "50%",
          overflow: "auto",
        }}
      >
        {isLogin &&
          events &&
          events.map((item) => (
            <ListItem disablePadding key={item.created}>
              <Chip
                sx={{ color: "white", mr: "10px" }}
                label={item.start.dateTime.slice(11, 16)}
                size="small"
              />
              <ListItemText primary={item.summary} />
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default Calendar;
