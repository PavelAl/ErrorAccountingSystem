import { User } from "./User";

export interface HistoryRecord {
  taskId: string;
  date: string;
  action: TaskChangeAction;
  comment: string;
  user: User;
}

export enum TaskChangeAction {
  entering = 'entering',
  opening = 'opening',
  solving = 'solving',
  closing = 'closing'
}

export const taskChangeActionToString = (action: TaskChangeAction) => {
  switch (action) {
    case (TaskChangeAction.entering): return 'Entered';
    case (TaskChangeAction.opening): return 'Opened';
    case (TaskChangeAction.solving): return 'Solved';
    case (TaskChangeAction.closing): return 'Closed';
  }
}
