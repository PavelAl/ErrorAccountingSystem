import { Kanban, KanbanType } from "src/common/controls/KanbanBoard"
import { TaskStatus, Task } from "src/common/types"

export const getNewTasks = (tasks: Task[]): Task[] => {
  return getTasksByStatus(tasks, TaskStatus.new)
}

export const getOpenedTasks = (tasks: Task[]): Task[] => {
  return getTasksByStatus(tasks, TaskStatus.open)
}

export const getSolvedTasks = (tasks: Task[]): Task[] => {
  return getTasksByStatus(tasks, TaskStatus.solved)
}

export const getTasksByStatus = (tasks: Task[], status: TaskStatus): Task[] => {
  return tasks.filter((task) => task.status === status);
}

export const taskToKanban = (task: Task): Kanban => {
  const description = task.fullDescription.length > 100 ? task.fullDescription.slice(0, 97) + '...' : task.fullDescription;

  return {
    key: task.id,
    title: task.shortDescription,
    description,
    type: taskStatusToKanbanType(task.status)
  }
}

export const taskStatusToKanbanType = (taskStatus: TaskStatus): KanbanType => {
  switch (taskStatus) {
    case TaskStatus.new: return KanbanType.warning;
    case TaskStatus.open: return KanbanType.common;
    case TaskStatus.solved: return KanbanType.warning;
    case TaskStatus.closed: return KanbanType.common;
  }
}
