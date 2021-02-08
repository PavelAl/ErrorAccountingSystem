import { createContext } from "react";

import { User, UserRole } from "../types";

interface AuthContextValue {
  user: User;
  setUser: (user: User) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  user: {
    name: '',
    role: UserRole.user
  },
  setUser: () => null
});
