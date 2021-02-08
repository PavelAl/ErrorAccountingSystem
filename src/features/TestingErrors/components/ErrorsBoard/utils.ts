import { Kanban, KanbanType } from "src/common/controls/KanbanBoard"
import { ErrorStatus, TestingError } from "src/common/types"

export const getNewErrors = (errors: TestingError[]): TestingError[] => {
  return getErrorsByStatus(errors, ErrorStatus.new)
}

export const getOpenedErrors = (errors: TestingError[]): TestingError[] => {
  return getErrorsByStatus(errors, ErrorStatus.open)
}

export const getSolvedErrors = (errors: TestingError[]): TestingError[] => {
  return getErrorsByStatus(errors, ErrorStatus.solved)
}

export const getErrorsByStatus = (errors: TestingError[], status: ErrorStatus): TestingError[] => {
  return errors.filter((error) => error.status === status);
}

export const errorToKanban = (error: TestingError): Kanban => {
  return {
    key: error.id,
    title: error.fullDescription,
    description: error.shortDescription,
    type: errorStatusToKanbanType(error.status)
  }
}

export const errorStatusToKanbanType = (errorStatus: ErrorStatus): KanbanType => {
  switch (errorStatus) {
    case ErrorStatus.new: return KanbanType.warning;
    case ErrorStatus.open: return KanbanType.common;
    case ErrorStatus.solved: return KanbanType.warning;
    case ErrorStatus.closed: return KanbanType.common;
  }
}
