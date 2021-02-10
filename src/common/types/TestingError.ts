import { ErrorHistoryRecord } from "./ErrorHistoryRecord";
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
  history: ErrorHistoryRecord[];
}

export enum ErrorStatus {
  new = 'new',
  open = 'open',
  solved = 'solved',
  closed = 'closed'
}

export enum ErrorPriority {
  low = 'low',
  medium = 'medium',
  high = 'high',
  veryHigh = 'veryHigh'
}

export enum ErrorSeverity {
  critical = 'critical',
  significant = 'significant',
  minor = 'minor',
  changeRequest = 'changeRequest'
}