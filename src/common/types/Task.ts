import { HistoryRecord, TaskChangeAction } from "./HistoryRecord";
import { User } from "./User";

export interface Task {
  id: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  status: TaskStatus;
  priority: TaskPriority;
  severity: TaskSeverity;
  user: User;
  history: HistoryRecord[];
}

export enum TaskStatus {
  new = 'new',
  open = 'open',
  solved = 'solved',
  closed = 'closed'
}

export enum TaskPriority {
  low = 'low',
  medium = 'medium',
  high = 'high',
  veryHigh = 'veryHigh'
}

export enum TaskSeverity {
  critical = 'critical',
  significant = 'significant',
  minor = 'minor',
  changeRequest = 'changeRequest'
}

export const getTaskStatusByAction = (action: TaskChangeAction) => {
  switch (action) {
    case (TaskChangeAction.entering): return TaskStatus.new;
    case (TaskChangeAction.opening): return TaskStatus.open;
    case (TaskChangeAction.solving): return TaskStatus.solved;
    case (TaskChangeAction.closing): return TaskStatus.closed;
  }
}