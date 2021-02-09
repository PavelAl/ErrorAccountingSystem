import { createContext } from "react";
import { Authorization } from "./Auth.types";

export const AuthContext = createContext<Authorization>({
  signout: () => null,
  signin: () => null
});