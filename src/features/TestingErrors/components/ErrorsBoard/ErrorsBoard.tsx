import * as React from 'react';

import { TestingError } from 'src/common/types';

import './ErrorsBoard.styles.scss'

interface Props {
  errors: TestingError[];
}

export const ErrorsBoard = (props: Props) => {
  return (
    <div className={'errorsBoard'}>
      Errors board
    </div>
  )
}
