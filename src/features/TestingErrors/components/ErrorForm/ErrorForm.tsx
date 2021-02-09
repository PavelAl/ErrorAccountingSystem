import * as React from 'react';

import { NewErrorForm, ViewErrorForm } from './controls';
import { useErrorFormData } from './hooks';

import { ErrorFormProps } from './ErrorForm.types';

import './ErrorForm.styles.scss';

export const ErrorForm = (props: ErrorFormProps) => {
  const { errorId } = props;
  const { error, setError } = useErrorFormData(props);

  return (
    <div className={'errorForm'}>
      {
        errorId
          ? <ViewErrorForm error={error} />
          : <NewErrorForm error={error} setError={setError} />
      }
    </div>
  )
}