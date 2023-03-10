import { FC } from "react";

import { Box } from "@mui/material";

import Location from "./components/Location";
import Date from "./components/Date";
import Calendar from "./components/Calendar";
import Forecast from "./components/Forecast";

const App: FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1530518854704-23de978d2915?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1986&q=80)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          width: "80%",
          height: "80%",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1615254295718-dd6994353b5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2129&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: 10,
        }}
      >
        <Box
          sx={{
            p: "20px",
            width: "100%",
            height: "20%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Date />
          <Location />
        </Box>
        <Calendar />
        <Forecast />
      </Box>
    </Box>
  );
};

export default App;
