import { FakeTasks } from "src/common/fakeData/tasks";
import { HistoryRecord, Task, getTaskStatusByAction } from "src/common/types";

import { TasksService } from "./TasksService";

export class FakeTasksService implements TasksService {
  private tasks = FakeTasks;

  async getTaskById(taskId: string) {
    return this.simulateLoading(() => this.tasks.filter(task => task.id === taskId)[0]);
  }

  async getTasks() {
    return this.simulateLoading(() => this.tasks);
  }

  async changetaskStatus(newRecord: HistoryRecord) {
    const taskId = newRecord.taskId;

    return this.simulateLoading(() => {
      this.tasks = this.tasks.map((task): Task => {
        return task.id === taskId
          ? {
            ...task,
            status: getTaskStatusByAction(newRecord.action),
            history: [
              ...task.history,
              newRecord
            ]
          } : task;
      })
    });
  }

  async createTask(task: Task) {
    return this.simulateLoading(() => {
      this.tasks.push(task);
    })
  };

  private simulateLoading<T>(callback: () => T): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(callback());
      }, 1000)
    })
  }
}