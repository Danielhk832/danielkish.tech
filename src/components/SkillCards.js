import React from "react";
import { Button, Paper, Typography } from "@mui/material";

import "../App.css";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import { CardMedia, CardContent } from "@mui/material";
import { Grid } from "@mui/material";

const SkillCards = (props) => {
  console.log(props.skills);
  const { skills } = props;
  console.log(skills);
  return (
    <Grid item xs={2} padding="1%">
      <Card elevation={6} sx={{ maxWidth: 220 }}>
        <CardMedia
          component="img"
          height="200"
          width="200"
          src={skills.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {skills.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SkillCards;
