import React from "react";

import { Container, Box } from "@mui/material";
import "./App.css";
import Location from "./components/Location/Location";
import Date from "./components/Date/Date";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <Box
      sx={{
        pt: "10vh",
        width: "100vw",
        height: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1530518854704-23de978d2915?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1986&q=80)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        sx={{
          width: "80vw",
          height: "80vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1580094333632-438bdc04f79f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100vw",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Date />
          <Location />
        </Box>
        <Calendar />
      </Container>
    </Box>
  );
}

export default App;
