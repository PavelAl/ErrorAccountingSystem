import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { FakeErrors } from 'src/common/fakeData/errors';

import { ErrorsBoard } from 'src/features/TestingErrors/components/ErrorsBoard';

import './ErrorsBoardPage.styles.scss';

export const ErrorsBoardPage = () => {
  const history = useHistory();

  return (
    <div className={'errorsBoardPage'}>
      <ErrorsBoard
        errors={FakeErrors}
        onErrorSelected={
          (errorId) => history.push(`/error/${errorId}`, {})
        }
      />
    </div>
  )
}