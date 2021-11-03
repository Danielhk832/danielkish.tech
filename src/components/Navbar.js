import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppBar, Toolbar } from "@mui/material";
import { animate } from "motion";
import { Typography } from "@mui/material";

const NavBar = (props) => {
  return (
    <div className="nav-header">
      <header>
        <nav>
          <AppBar
            elevation={3}
            color="inherit"
            position="static"
            sx={{ width: "100vw" }}
          >
            <Toolbar>
              <Button size="large" variant="outlined" color="inherit">
                hi
              </Button>
              <Button size="large" color="inherit">
                hi
              </Button>
              <Button size="large" color="inherit">
                hi
              </Button>
            </Toolbar>
          </AppBar>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
