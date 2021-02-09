import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { useAuth } from "../useAuth";

export const PrivateRoute: React.FunctionComponent<RouteProps> = ({ children, ...rest }) => {
  let auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}
