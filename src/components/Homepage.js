import pdf from "../assets/resume.pdf";
import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import "../App.css";
import { Box } from "@mui/system";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Card from "@mui/material/Card";
import { CardMedia, CardContent } from "@mui/material";
import skills from "../assets/SkillsArray";
import SkillCards from "./SkillCards";
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Homepage = (props) => {
  const onResumeClick = () => {
    window.open(pdf);
  };

  return (
    <div className="home">
      <Paper
        component="div"
        className="hero"
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography gutterBottom variant="h1" color="#fafafa">
            Daniel Kish
          </Typography>
          <Button variant="contained" color="inherit" onClick={onResumeClick}>
            Resume
          </Button>
        </Box>
      </Paper>
      <Box>
        <Item elevation={6} sx={{ width: "100%" }} className="homepage-text">
          <Typography sx={{ marginTop: "1%" }} gutterBottom variant="h3">
            My Skills
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            {skills.map((skill) => {
              return <SkillCards skills={skill} />;
            })}
          </Grid>
        </Item>
      </Box>
    </div>
  );
};

export default Homepage;
