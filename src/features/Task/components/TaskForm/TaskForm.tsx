import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { Spinner, SpinnerSize } from '@fluentui/react';

import { Task } from 'src/common/types';

import { NewForm, ViewForm } from './forms';
import { useTaskFormData } from './hooks';

import { TaskFormProps } from './TaskForm.types';

import './TaskForm.styles.scss';

export const TaskForm = (props: TaskFormProps) => {
  const { taskId } = props;
  const { task, isLoading, onCreateTask, ontaskStatusChange } = useTaskFormData(props);
  const history = useHistory();

  const onCancel = () => history.goBack();

  if (isLoading && typeof task === 'undefined') return <Spinner size={SpinnerSize.large} label={'Loading...'} />
  
  return (
    <div className={'taskForm'}>
      {
        taskId
          ? (
            <ViewForm
              task={task as Task}
              ontaskStatusChange={async (action, comment) => {
                await ontaskStatusChange(action, comment);
                alert('Task status changed');
                onCancel();
              }}
              onCancel={onCancel}
              isDisabled={isLoading}
            />
          ) : (
            <NewForm
              task={task as Task}
              onCreate={(task, comment) => {
                onCreateTask(task, comment)
                onCancel();
              }}
              onCancel={onCancel}
              isDisabled={isLoading}
            />
          )
      }
    </div>
  )
}