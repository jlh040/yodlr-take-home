import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NaviBar from "./NaviBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NaviBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
