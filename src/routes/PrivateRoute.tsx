import React from "react";
import { Route, Redirect } from "react-router-dom";

import { RouteInterfacez } from "./interfaces";

export const PrivateRoute: React.FC<RouteInterfacez> = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    />
  );
};
