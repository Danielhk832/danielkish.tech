import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import "../App.css";
import { Box } from "@mui/system";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Card from "@mui/material/Card";
import { CardMedia, CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Projects = (props) => {
  return (
    <Paper
      className="projects"
      elevation={3}
      component="div"
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography color="inherit" variant="h3">
        Stuff goes here
      </Typography>
    </Paper>
  );
};

export default Projects;
