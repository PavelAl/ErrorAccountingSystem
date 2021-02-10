import { User } from "src/common/types";

export interface AuthService {
  authorizeUser: (login: string, password: string) => User | undefined;
}