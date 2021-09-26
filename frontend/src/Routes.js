import React from "react";
import { Route, Switch } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";
import AdminPage from "./AdminPage";
import Homepage from "./Homepage";

const Routes = () => {
  return (
    <div>
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
    </div>
  );
};

export default Routes;
