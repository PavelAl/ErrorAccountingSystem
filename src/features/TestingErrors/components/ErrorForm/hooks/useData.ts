import { useEffect, useState } from "react";
import { useAuth } from "src/common/auth";
import { FakeErrors } from "src/common/fakeData/errors";

import { TestingError, ErrorStatus, ErrorPriority, ErrorSeverity, User, UserRole } from "src/common/types"

import { ErrorFormProps } from "../ErrorForm.types"

export const useErrorFormData = (props: ErrorFormProps) => {
  const { errorId } = props;
  const { user } = useAuth();

  const [error, setError] = useState<TestingError>(createNewError(user));

  useEffect(() => {
    if (typeof errorId !== 'undefined') {
      const selectedError = FakeErrors.find((error) => error.id === errorId) ?? createNewError(user);

      setError(selectedError);
    } else {
      setError(createNewError(user));
    }
  }, [errorId, user])

  return { error, setError }
}

function createNewError(user?: User): TestingError {
  return {
    id: 'GUID',
    date: new Date().toISOString(),
    shortDescription: '',
    fullDescription: '',
    status: ErrorStatus.new,
    priority: ErrorPriority.low,
    severity: ErrorSeverity.minor,
    user: user ?? {
      id: 0,
      name: '',
      role: UserRole.user
    },
    history: []
  }
}
