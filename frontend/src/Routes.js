import React from "react";
import { Route } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";
import AdminPage from "./AdminPage";

const Routes = () => {
  return (
    <div>
      <Route exact path="/signup">
        <RegistrationPage />
      </Route>
      <Route exact path="/admin">
        <AdminPage />
      </Route>
    </div>
  );
};

export default Routes;
