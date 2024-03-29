import { FC } from "react";

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
import useTypedSelector from "../../hooks/useTypedSelector";
import { userSelector } from "../../store/selectors";
import {
  setEventsAction,
  setIsLoginAction,
} from "../../store/reducers/userReducer/actionCreators";
import apiCalendar from "../../http/googleCalendar_api";

const Calendar: FC = () => {
  const dispatch = useAppDispatch();
  const { isLogin, events } = useTypedSelector(userSelector);

  const handleOnLogin = () => {
    apiCalendar.handleAuthClick();
    dispatch(setIsLoginAction(true));
  };

  const handleOnLogout = () => {
    apiCalendar.handleSignoutClick();
    dispatch(setIsLoginAction(false));
    dispatch(setEventsAction([]));
  };

  const handleCheckEvents = () => {
    apiCalendar
      .listEvents({
        timeMin: new Date().toISOString(),
        timeMax: new Date(new Date().getTime() + 36000000).toISOString(),
      })
      .then(({ result }: any) => dispatch(setEventsAction(result.items)));
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
            <Button
              sx={{ color: "white", fontSize: { xs: "10px", md: "14px" } }}
              onClick={handleCheckEvents}
            >
              Check my Google Calendar
            </Button>
            <Button
              sx={{ fontSize: { xs: "10px", md: "14px" } }}
              onClick={handleOnLogout}
            >
              Log out
            </Button>
          </>
        ) : (
          <Button
            sx={{ color: "white", fontSize: { xs: "10px", md: "14px" } }}
            onClick={handleOnLogin}
          >
            Log in to Google Calendar
          </Button>
        )}
      </ButtonGroup>
      <List
        sx={{
          color: "white",
          fontSize: { xs: "10px", md: "16px" },
          height: "200px",
          width: "50%",
          overflow: "auto",
        }}
      >
        {isLogin &&
          events &&
          events.map((item) => (
            <ListItem disablePadding key={item.id}>
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
