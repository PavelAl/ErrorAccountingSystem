import { User } from "./User";

export interface ErrorHistoryRecord {
  errorId: string;
  date: string;
  action: ErrorHistoryRecordAction;
  comment: string;
  user: User;
}

export enum ErrorHistoryRecordAction {
  entering,
  opening,
  deciding,
  closing
}