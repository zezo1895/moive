import React, { Fragment, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navgation from "./component/Navgation/Navgation";
import Container from "react-bootstrap/Container";
import Home from "./page/Home";

function App() {
  const [IsActive, setIsActive] = useState("");

  const handleClick = () => {
    setIsActive(!IsActive);
    console.log("ziad");
  };
  return (
    <Fragment>
      <Navgation isActive={IsActive} handleClick={handleClick} />
      <Home/>
    </Fragment>
  );
}

export default App;
//
