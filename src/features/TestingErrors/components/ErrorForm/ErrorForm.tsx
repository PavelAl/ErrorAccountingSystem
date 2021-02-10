import * as React from 'react';

import { NewForm, ViewForm } from './forms';
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
          ? <ViewForm error={error} />
          : <NewForm error={error} setError={setError} />
      }
    </div>
  )
}