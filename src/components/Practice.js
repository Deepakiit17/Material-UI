// import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useState } from "react";

function App() {
  // return (
  //   <div className="App">
  //     <h1>React-MUI</h1>
  //     <button>Click me</button>
  //     <Button color="primary">MUI</Button>
  //     <Button variant="contained">Contained</Button>
  //     <Button variant="contained" disabled>
  //       Disabled
  //     </Button>
  //     <Button variant="contained" href="#contained-buttons">
  //       Link
  //     </Button>
  //   </div>
  // );

  const [color, setColor] = useState("primary");
  const [disableBtn, setDisableBtn] = useState(false);

  function customMe() {
    // setColor("secondary");
    // setDisableBtn(true);
    // alert("function callled");
  }

  return (
    <div className="App">
      <h1>React Material-UI</h1>
      <Button 
      color={color}
      disabled={disableBtn}
      variant="outline"
      size="large"
      onClick={()=>{customMe}}
      endIcon={<Delete />}
      >
      Click me
      </Button>
    </div>
  );
}

export default App;
