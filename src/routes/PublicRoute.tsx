import React from "react";
import { Route, Redirect } from "react-router-dom";

import { RouteInterfacez } from "./interfaces";

export const PublicRoute: React.FC<RouteInterfacez> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} /> 
      }
    />
  );
};
