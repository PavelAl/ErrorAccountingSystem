import { User } from "src/common/types";

export interface Authorization {
  user?: User,
  signin: (login: string, password: string, cb: () => void,) => void,
  signout: (cb: () => void) => void
}