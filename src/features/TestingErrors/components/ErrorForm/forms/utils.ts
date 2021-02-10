import { ErrorPriority, ErrorSeverity } from "src/common/types"

export const formatPriortyToViewValue = (priority: ErrorPriority) => {
  switch (priority) {
    case ErrorPriority.low: return 'Low';
    case ErrorPriority.medium: return 'Medium';
    case ErrorPriority.high: return 'High';
    case ErrorPriority.veryHigh: return 'Very high';
  }
}

export const formatSeverityToViewValue = (severity: ErrorSeverity) => {
  switch (severity) {
    case ErrorSeverity.changeRequest: return 'Change request';
    case ErrorSeverity.minor: return 'Minor';
    case ErrorSeverity.critical: return 'Critical';
    case ErrorSeverity.significant: return 'Significant';
  }
}