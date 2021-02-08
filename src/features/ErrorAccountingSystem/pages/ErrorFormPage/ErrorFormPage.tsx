import * as React from 'react';

import { ErrorForm } from 'src/features/TestingErrors/components/ErrorForm';

import './ErrorFormPage.style.scss';

export const ErrorFormPage = () => {
  return (
    <div className={'loginFormPage'}>
      <ErrorForm />
    </div>
  )
}