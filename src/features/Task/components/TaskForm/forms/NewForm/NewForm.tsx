import * as React from 'react';

import { Dropdown, TextField } from '@fluentui/react';

import { TaskPriority, TaskSeverity, Task } from 'src/common/types';
import { NewFormToolbar } from './controls';

import './NewForm.styles.scss';

interface Props {
  task: Task;
  onCreate: (task: Task, comment: string) => void;
  onCancel: () => void;
  isDisabled: boolean;
}

export const NewForm = (props: Props) => {
  const { task: propsTask, onCreate, onCancel, isDisabled } = props;

  const [task, setTask] = React.useState(propsTask);
  const [comment, setComment] = React.useState('');

  return (
    <div className={'taskNewForm'}>
      <TextField
        label={'Short description'}
        value={task.shortDescription}
        onChange={(e, newValue) => {
          const shortDescription: string = newValue ?? '';

          setTask({ ...task, shortDescription });
        }}
        required={true}
        disabled={isDisabled}
      />

      <TextField
        label={'Full description'}
        value={task.fullDescription}
        onChange={(e, newValue) => {
          const fullDescription: string = newValue ?? '';

          setTask({ ...task, fullDescription });
        }}
        multiline={true}
        required={true}
        disabled={isDisabled}
      />

      <Dropdown
        label={'Priority'}
        options={[
          { key: TaskPriority.low, text: 'Low' },
          { key: TaskPriority.medium, text: 'Medium' },
          { key: TaskPriority.high, text: 'High' },
          { key: TaskPriority.veryHigh, text: 'Very high' }
        ]}
        selectedKey={task.priority}
        onChange={(e, option) => {
          const priority: TaskPriority = option?.key.toString() as TaskPriority ?? TaskPriority.low;

          setTask({ ...task, priority })
        }}
        disabled={isDisabled}
      />

      <Dropdown
        label={'Severity'}
        options={[
          { key: TaskSeverity.changeRequest, text: 'Change request' },
          { key: TaskSeverity.minor, text: 'Minor' },
          { key: TaskSeverity.critical, text: 'Critical' },
          { key: TaskSeverity.significant, text: 'Significant' }
        ]}
        selectedKey={task.severity}
        onChange={(e, option) => {
          const severity: TaskSeverity = option?.key.toString() as TaskSeverity ?? TaskSeverity.changeRequest;

          setTask({ ...task, severity })
        }}
        disabled={isDisabled}
      />

      <TextField
        label={'Comment'}
        value={comment}
        onChange={(e, newValue) => {
          const newComment: string = newValue ?? '';

          setComment(newComment);
        }}
        multiline={true}
      />

      <NewFormToolbar
        onCreate={() => onCreate(task, comment)}
        onCancel={onCancel}
        isDisabled={!taskIsValid(task)}
        isLoading={isDisabled}
      />
    </div>
  )
}

function taskIsValid(task: Task) {
  return task.shortDescription.length > 0 && task.fullDescription.length > 0
}