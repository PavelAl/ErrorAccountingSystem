import * as React from 'react';
import { useParams } from 'react-router-dom';

import { ErrorForm } from 'src/features/TestingErrors/components/ErrorForm';

import './ErrorFormPage.styles.scss';

export const ErrorFormPage = () => {
  const params = useParams<{ errorId?: string }>();

  return (
    <div className={'errorFormPage'}>
      <ErrorForm errorId={params.errorId} />
    </div>
  )
}