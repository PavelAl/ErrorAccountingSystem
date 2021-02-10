import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { ServicesContext } from 'src/common/context/ServicesContext';

import { TasksBoard } from 'src/features/Task/components/TasksBoard';

import './TasksBoardPage.styles.scss';

export const TasksBoardPage = () => {
  const history = useHistory();
  const { tasksService } = React.useContext(ServicesContext);

  return (
    <div className={'tasksBoardPage'}>
      <TasksBoard
        tasksService={tasksService}
        onTaskSelected={
          (taskId) => history.push(`/task/${taskId}`, {})
        }
      />
    </div>
  )
}