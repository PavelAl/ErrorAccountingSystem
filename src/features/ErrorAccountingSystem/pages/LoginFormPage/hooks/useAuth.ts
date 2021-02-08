import { useCallback, useContext } from "react";

import { AuthContext } from "src/common/context/authContext";
import { UserRole } from "src/common/types";

export const useAuth = () => {
  const { setUser } = useContext(AuthContext);

  const LoginUser = useCallback((login: string, password: string) => {
    setUser({ name: login, role: UserRole.admin });
  }, [setUser]);

  return { LoginUser };
}