import React from "react";
import "./Routes.css";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";
import AdminPage from "./AdminPage";
import Homepage from "./Homepage";

const Routes = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/signup">
          <RegistrationPage />
        </Route>
        <Route exact path="/admin">
          <AdminPage />
        </Route>
        <Route exact to="/">
          <Homepage />
        </Route>
      </Switch>
    </Container>
  );
};

export default Routes;
