import { useCallback } from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "src/common/auth";

export const useLogin = () => {
  const { signin } = useAuth();
  const history = useHistory();

  const LoginUser = useCallback((login: string, password: string) => {
    signin(login, password, () => null);

    history.push('/dashboard');
  }, [signin, history]);

  return { LoginUser };
}