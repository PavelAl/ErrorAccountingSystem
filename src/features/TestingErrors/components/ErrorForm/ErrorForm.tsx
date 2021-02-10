import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { NewForm, ViewForm } from './forms';
import { useErrorFormData } from './hooks';

import { ErrorFormProps } from './ErrorForm.types';

import './ErrorForm.styles.scss';

export const ErrorForm = (props: ErrorFormProps) => {
  const { errorId } = props;

  const { error } = useErrorFormData(props);

  const history = useHistory();

  const onCancel = () => history.goBack();

  return (
    <div className={'errorForm'}>
      {
        errorId
          ? (
            <ViewForm
              error={error}
              onErrorStatusChange={() => onCancel()}
              onCancel={onCancel}
            />
          )
          : (
            <NewForm
              error={error}
              onCreate={() => onCancel()}
              onCancel={onCancel}
            />
          )
      }
    </div>
  )
}