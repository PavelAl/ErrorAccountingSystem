import * as React from "react";
import { useState } from "react";

import { User } from "../types";
import { AuthContext } from "./context";
import { Authorization } from "./Auth.types";
import { ServicesContext } from "../context/ServicesContext";

export const AuthProvider: React.FunctionComponent = ({ children }) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}> {children} </AuthContext.Provider>;
}

function useProvideAuth(): Authorization {
  const [user, setUser] = useState<User>();

  const { authService } = React.useContext(ServicesContext);

  const signin = (login: string, password: string, cb: () => void,) => {
    const user = authService.authorizeUser(login, password);
    if (user) {
      setUser({
        id: 1,
        name: login
      });

      cb();
    } else {
      alert('No such user');
    }
  };

  const signout = (cb: () => void) => {
    setUser(undefined);
    cb();
  };

  return {
    user,
    signin,
    signout
  };
}
