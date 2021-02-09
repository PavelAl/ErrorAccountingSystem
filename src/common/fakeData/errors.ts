import { ErrorPriority, ErrorSeverity, ErrorStatus, TestingError, UserRole } from "../types";

export const FakeErrors: TestingError[] = [
  {
    id: '1',
    date: new Date().toISOString(),
    shortDescription: 'Error 1',
    fullDescription: 'Long description on error 1',
    status: ErrorStatus.new,
    priority: ErrorPriority.low,
    severity: ErrorSeverity.minor,
    user: {
      id: 1,
      name: 'User 1',
      role: UserRole.admin
    }
  },
  {
    id: '2',
    date: new Date().toISOString(),
    shortDescription: 'Error 2',
    fullDescription: 'Long description on error 2',
    status: ErrorStatus.open,
    priority: ErrorPriority.high,
    severity: ErrorSeverity.significant,
    user: {
      id: 2,
      name: 'User 2',
      role: UserRole.admin
    }
  },
  {
    id: '3',
    date: new Date().toISOString(),
    shortDescription: 'Error 3',
    fullDescription: 'Long description on error 3',
    status: ErrorStatus.solved,
    priority: ErrorPriority.veryHigh,
    severity: ErrorSeverity.critical,
    user: {
      id: 3,
      name: 'User 3',
      role: UserRole.admin
    }
  },
  {
    id: '4',
    date: new Date().toISOString(),
    shortDescription: 'Error 4',
    fullDescription: 'Long description on error 4',
    status: ErrorStatus.new,
    priority: ErrorPriority.medium,
    severity: ErrorSeverity.changeRequest,
    user: {
      id: 4,
      name: 'User 4',
      role: UserRole.admin
    }
  }
]