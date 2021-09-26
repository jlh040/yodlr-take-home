import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
    </div>
  );
}

export default App;
