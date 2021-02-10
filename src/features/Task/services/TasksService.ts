import { HistoryRecord, Task } from "src/common/types";

export interface TasksService {
  getTaskById: (taskId: string) => Promise<Task>;
  getTasks: () => Promise<Task[]>;
  createTask: ((task: Task) => Promise<void>);
  changetaskStatus: (newRecord: HistoryRecord) => Promise<void>
}