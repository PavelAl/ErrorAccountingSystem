import { TaskChangeAction, TaskPriority, TaskSeverity, TaskStatus, Task } from "../types";

export const FakeTasks: Task[] = [
  {
    id: '1',
    date: new Date().toISOString(),
    shortDescription: 'Task 1',
    fullDescription: 'Long description on error 1',
    status: TaskStatus.new,
    priority: TaskPriority.low,
    severity: TaskSeverity.minor,
    user: {
      id: 1,
      name: 'User 1'
    },
    history: [
      {
        action: TaskChangeAction.entering,
        date: new Date().toISOString(),
        taskId: '1',
        comment: '',
        user: {
          id: 1,
          name: 'User 1'
        }
      }
    ]
  },
  {
    id: '2',
    date: new Date().toISOString(),
    shortDescription: 'Task 2',
    fullDescription: 'Long description on error 2 Long description on error 2 Long description on error 2 Long description on error 2 Long description on error 2',
    status: TaskStatus.open,
    priority: TaskPriority.high,
    severity: TaskSeverity.significant,
    user: {
      id: 2,
      name: 'User 2'
    },
    history: [
      {
        action: TaskChangeAction.entering,
        date: new Date().toISOString(),
        taskId: '2',
        comment: '',
        user: {
          id: 2,
          name: 'User 2'
        }
      },
      {
        action: TaskChangeAction.opening,
        date: new Date().toISOString(),
        taskId: '2',
        comment: 'Long description on error 2 Long description on error 2 Long description on error 2 Long description on error 2 Long description on error 2',
        user: {
          id: 3,
          name: 'User 3'
        }
      }
    ]
  },
  {
    id: '3',
    date: new Date().toISOString(),
    shortDescription: 'Task 3',
    fullDescription: 'Long description on error 3',
    status: TaskStatus.solved,
    priority: TaskPriority.veryHigh,
    severity: TaskSeverity.critical,
    user: {
      id: 3,
      name: 'User 3'
    },
    history: [
      {
        action: TaskChangeAction.entering,
        date: new Date().toISOString(),
        taskId: '3',
        comment: '',
        user: {
          id: 3,
          name: 'User 3'
        }
      },
      {
        action: TaskChangeAction.opening,
        date: new Date().toISOString(),
        taskId: '3',
        comment: '',
        user: {
          id: 3,
          name: 'User 3'
        }
      },
      {
        action: TaskChangeAction.solving,
        date: new Date().toISOString(),
        taskId: '3',
        comment: '',
        user: {
          id: 3,
          name: 'User 3'
        }
      }
    ]
  },
  {
    id: '4',
    date: new Date().toISOString(),
    shortDescription: 'Task 4',
    fullDescription: 'Long description on error 4',
    status: TaskStatus.new,
    priority: TaskPriority.medium,
    severity: TaskSeverity.changeRequest,
    user: {
      id: 4,
      name: 'User 4'
    },
    history: [
      {
        action: TaskChangeAction.entering,
        date: new Date().toISOString(),
        taskId: '4',
        comment: '',
        user: {
          id: 4,
          name: 'User 4'
        }
      }
    ]
  }
]