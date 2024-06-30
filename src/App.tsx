import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import { setCookie } from "./utils/cookie";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0d00",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f5f5f5",
      contrastText: "#4c4c4c",
    },
  },
});

function App() {
  setCookie("accessToken", "12345");

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />;
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
