import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppBar, Toolbar } from "@mui/material";
import { animate } from "motion";
import { Typography } from "@mui/material";
import { ButtonGroup } from "@mui/material";

const NavBar = (props) => {
  return (
    <div className="nav-header">
      <header>
        <nav>
          <AppBar
            elevation={3}
            color="inherit"
            sx={{ alignItems: "right", width: "100vw" }}
          >
            <Toolbar>
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button size="large" variant="outlined" color="inherit">
                  About
                </Button>
                <Button size="large" color="inherit">
                  Skills
                </Button>
                <Button size="large" color="inherit">
                  Projects
                </Button>
              </ButtonGroup>
            </Toolbar>
          </AppBar>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
