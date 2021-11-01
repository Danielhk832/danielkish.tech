import "./App.css";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function App() {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = "resume.pdf";
    link.href = "./assets/resume.pdf";
    link.click();
  };

  return (
    <div className="App">
      <Typography variant="h1">Hi welcome hi hello</Typography>
      <Button onClick={onDownload}>Resume</Button>
    </div>
  );
}

export default App;
