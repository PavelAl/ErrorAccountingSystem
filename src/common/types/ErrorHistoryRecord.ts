import { User } from "./User";

export interface ErrorHistoryRecord {
  errorId: string;
  date: string;
  action: ErrorHistoryRecordAction;
  comment: string;
  user: User;
}

export enum ErrorHistoryRecordAction {
  entering = 'entering',
  opening = 'opening',
  solving = 'solving',
  closing = 'closing'
}

export const errorHistoryActionToString = (action: ErrorHistoryRecordAction) => {
  switch (action) {
    case (ErrorHistoryRecordAction.entering): return 'Entered';
    case (ErrorHistoryRecordAction.opening): return 'Opened';
    case (ErrorHistoryRecordAction.solving): return 'Solved';
    case (ErrorHistoryRecordAction.closing): return 'Closed';
  }
}