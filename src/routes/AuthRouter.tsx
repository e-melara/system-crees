import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "src/views/Login/LoginPage";

export const AuthRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/auth/login" component={LoginPage} />
        <Redirect to="/auth/login" />
      </Switch>
    </>
  );
};
