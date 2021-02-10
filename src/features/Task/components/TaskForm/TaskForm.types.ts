import { TasksService } from "../../services";

export interface TaskFormProps {
  taskId?: string;
  tasksService: TasksService;
}