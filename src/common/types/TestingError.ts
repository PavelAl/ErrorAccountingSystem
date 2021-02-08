import { User } from "./User";

export interface TestingError {
  id: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  status: ErrorStatus;
  priority: ErrorPriority;
  severity: ErrorSeverity;
  user: User;
}

export enum ErrorStatus {
  new,
  open,
  solved,
  closed
}

export enum ErrorPriority {
  low,
  medium,
  high,
  veryHigh
}

export enum ErrorSeverity {
  critical,
  significant,
  minor,
  changeRequest
}