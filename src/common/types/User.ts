export interface User {
  name: string;
  role: UserRole;
}

export enum UserRole {
  admin,
  user
}