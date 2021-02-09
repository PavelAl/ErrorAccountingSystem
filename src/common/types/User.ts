export interface User {
  id: number;
  name: string;
  role: UserRole;
}

export enum UserRole {
  admin,
  user
}