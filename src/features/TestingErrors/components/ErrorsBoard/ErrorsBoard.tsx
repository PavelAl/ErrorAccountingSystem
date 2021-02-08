import * as React from 'react';

import { Kanban, KanbanBoard, KanbanType } from 'src/common/controls/KanbanBoard';
import { FakeErrors } from 'src/common/fakeData/errors';

import { ErrorStatus, TestingError } from 'src/common/types';

import { getNewErrors, getOpenedErrors, getSolvedErrors } from './utils';

import './ErrorsBoard.styles.scss'

interface Props {
  errors: TestingError[];
}

export const ErrorsBoard = (props: Props) => {
  return (
    <div className={'errorsBoard'}>
      <KanbanBoard
        columns={[
          {
            key: 'newErrors',
            title: 'New',
            kanbans: getNewErrors(FakeErrors).map(errorToKanban)
          },
          {
            key: 'openedErrors',
            title: 'Opened',
            kanbans: getOpenedErrors(FakeErrors).map(errorToKanban)
          },
          {
            key: 'solvedErrors',
            title: 'Solved',
            kanbans: getSolvedErrors(FakeErrors).map(errorToKanban),
          }
        ]}
      />
    </div>
  )
}


interface ErrorKanbanProps {
  error: TestingError;
}

export const ErrorKanban = (props: ErrorKanbanProps) => {
  const { error } = props;

  return (
    <div>
      {error.shortDescription}
    </div>
  )
}

export const errorToKanban = (error: TestingError): Kanban => {
  return {
    key: error.id,
    title: error.fullDescription,
    description: error.shortDescription,
    type: errorStatusToKanbanType(error.status)
  }
}

export const errorStatusToKanbanType = (errorStatus: ErrorStatus): KanbanType => {
  switch (errorStatus) {
    case ErrorStatus.new: return KanbanType.warning;
    case ErrorStatus.open: return KanbanType.common;
    case ErrorStatus.solved: return KanbanType.warning;
    case ErrorStatus.closed: return KanbanType.common;
  }
}