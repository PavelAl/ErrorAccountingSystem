import * as React from 'react';

import { ErrorsBoard } from 'src/features/TestingErrors/components/ErrorsBoard';

import './ErrorsBoardPage.style.scss';

export const ErrorsBoardPage = () => {
  return (
    <div className={'errorsBoardPage'}>
      <ErrorsBoard errors={[]} />
    </div>
  )
}