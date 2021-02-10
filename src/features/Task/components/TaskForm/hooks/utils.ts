import { v4 as uuidv4 } from 'uuid';

import { TaskPriority, TaskSeverity, TaskStatus, Task, User, TaskChangeAction } from 'src/common/types';

export function createNewTask(user?: User): Task {
  return {
    id: uuidv4(),
    date: new Date().toISOString(),
    shortDescription: '',
    fullDescription: '',
    status: TaskStatus.new,
    priority: TaskPriority.low,
    severity: TaskSeverity.minor,
    user: user ?? {
      id: 0,
      name: ''
    },
    history: []
  }
}

export function addCommentToNewTask(task: Task, comment: string): Task {
  return {
    ...task,
    history: [
      {
        taskId: task.id,
        date: task.date,
        action: TaskChangeAction.entering,
        comment,
        user: task.user
      }
    ]
  };
}

export function createNewHistoryRecord() {

}