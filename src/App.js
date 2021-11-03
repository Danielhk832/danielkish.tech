import "./App.css";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import NavBar from "./components/Navbar.js";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const lightTheme = createTheme({ palette: { mode: "light" } });

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <NavBar />
        <Switch>
          <Route exact path={"/"}>
            <Homepage />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
