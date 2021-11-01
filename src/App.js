import "./App.css";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import pdf from "./assets/resume.pdf";

function App() {
  const onResumeClick = () => {
    window.open(pdf);
  };

  return (
    <div className="App">
      <Typography variant="h1">Hi welcome hi hello</Typography>
      <Button onClick={onResumeClick}>click me BABYYYY</Button>
    </div>
  );
}

export default App;
