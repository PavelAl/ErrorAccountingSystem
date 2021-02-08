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