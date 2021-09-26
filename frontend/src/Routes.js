import React from "react";
import { Route } from "react-router-dom";

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
