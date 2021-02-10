import * as React from 'react';

import { KanbanBoard } from 'src/common/controls/KanbanBoard';


import { taskToKanban, getNewTasks, getOpenedTasks, getSolvedTasks } from './utils';
import { useTaskBoardData } from './hooks';

import { TaskBoardProps } from './TaskBoard.types';

import './TasksBoard.styles.scss'
import { Spinner, SpinnerSize } from '@fluentui/react';

export const TasksBoard = (props: TaskBoardProps) => {
  const { onTaskSelected } = props;

  const { tasks, isLoading } = useTaskBoardData(props);

  if (isLoading) return <Spinner size={SpinnerSize.large} label={'Loading...'} />

  return (
    <div className={'tasksBoard'}>
      <KanbanBoard
        columns={[
          {
            key: 'newTasks',
            title: 'New',
            kanbans: getNewTasks(tasks).map(taskToKanban)
          },
          {
            key: 'openedTasks',
            title: 'Opened',
            kanbans: getOpenedTasks(tasks).map(taskToKanban)
          },
          {
            key: 'solvedTasks',
            title: 'Solved',
            kanbans: getSolvedTasks(tasks).map(taskToKanban),
          }
        ]}
        onKanbanClick={(kanban) => {
          onTaskSelected(kanban.key)
        }}
      />
    </div>
  )
}
