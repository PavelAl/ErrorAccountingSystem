import { TasksService } from "../../services";

export interface TaskBoardProps {
  tasksService: TasksService;
  onTaskSelected: (taskId: string) => void;
}