import { TaskPriority, TaskSeverity, TaskStatus } from "src/common/types"

export const formatPriortyToViewValue = (priority: TaskPriority) => {
  switch (priority) {
    case TaskPriority.low: return 'Low';
    case TaskPriority.medium: return 'Medium';
    case TaskPriority.high: return 'High';
    case TaskPriority.veryHigh: return 'Very high';
  }
}

export const formatSeverityToViewValue = (severity: TaskSeverity) => {
  switch (severity) {
    case TaskSeverity.changeRequest: return 'Change request';
    case TaskSeverity.minor: return 'Minor';
    case TaskSeverity.critical: return 'Critical';
    case TaskSeverity.significant: return 'Significant';
  }
}

export const formatStatusToViewValue = (status: TaskStatus) => {
  switch (status) {
    case TaskStatus.new: return 'New';
    case TaskStatus.open: return 'Open';
    case TaskStatus.solved: return 'Solved';
    case TaskStatus.closed: return 'Closed';
  }
}
