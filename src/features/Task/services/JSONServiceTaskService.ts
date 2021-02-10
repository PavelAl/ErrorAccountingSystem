import { getTaskStatusByAction, HistoryRecord, Task } from "src/common/types";
import { TasksService } from "./TasksService";

export class JSONServiceTasksService implements TasksService {
  constructor(private localHostUri: string) { }

  async getTaskById(taskId: string) {
    const task = await fetch(`${this.localHostUri}/tasks/${taskId}`, {
      method: 'GET'
    })
      .then(result => {
        return result.json();
      })

    return task
  }

  async getTasks() {
    const tasks = await fetch(`${this.localHostUri}/tasks`, {
      method: 'GET'
    })
      .then(result => {
        return result.json();
      })

    return tasks
  }

  async changetaskStatus(newRecord: HistoryRecord) {
    const taskId = newRecord.taskId;
    const task = await this.getTaskById(taskId);

    await fetch(`${this.localHostUri}/tasks/${taskId}`, {
      body: JSON.stringify({
        ...task,
        status: getTaskStatusByAction(newRecord.action),
        history: [
          ...task.history,
          newRecord
        ]
      }),
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async createTask(task: Task) {
    await fetch(`${this.localHostUri}/tasks`, {
      body: JSON.stringify(task),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  };
}
