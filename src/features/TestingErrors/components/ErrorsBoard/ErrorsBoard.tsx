import * as React from 'react';

import { KanbanBoard } from 'src/common/controls/KanbanBoard';

import { TestingError } from 'src/common/types';

import { errorToKanban, getNewErrors, getOpenedErrors, getSolvedErrors } from './utils';

import './ErrorsBoard.styles.scss'

interface Props {
  errors: TestingError[];
  onErrorSelected: (errorId: string) => void;
}

export const ErrorsBoard = (props: Props) => {
  const { errors, onErrorSelected } = props;

  return (
    <div className={'errorsBoard'}>
      <KanbanBoard
        columns={[
          {
            key: 'newErrors',
            title: 'New',
            kanbans: getNewErrors(errors).map(errorToKanban)
          },
          {
            key: 'openedErrors',
            title: 'Opened',
            kanbans: getOpenedErrors(errors).map(errorToKanban)
          },
          {
            key: 'solvedErrors',
            title: 'Solved',
            kanbans: getSolvedErrors(errors).map(errorToKanban),
          }
        ]}
        onKanbanClick={(kanban) => {
          onErrorSelected(kanban.key)
        }}
      />
    </div>
  )
}
