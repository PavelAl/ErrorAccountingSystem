import * as React from 'react';
import { useParams } from 'react-router-dom';
import { ServicesContext } from 'src/common/context/ServicesContext';

import { TaskForm } from 'src/features/Task/components/TaskForm';

import './TaskFormPage.styles.scss';

export const TaskFormPage = () => {
  const params = useParams<{ taskId?: string }>();
  const { tasksService } = React.useContext(ServicesContext);

  return (
    <div className={'taskFormPage'}>
      <TaskForm
        taskId={params.taskId}
        tasksService={tasksService}
      />
    </div>
  )
}