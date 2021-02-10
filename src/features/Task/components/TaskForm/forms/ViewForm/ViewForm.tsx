import * as React from 'react';

import { TextField } from '@fluentui/react';

import { TaskHistory } from 'src/features/Task/controls/TaskHistory';
import { ViewFormToolbar } from './controls';

import { TaskChangeAction, Task } from 'src/common/types';
import { formatDate } from 'src/common/utils';

import { ViewValueTemplate } from './ViewValueTemplate';

import { formatPriortyToViewValue, formatSeverityToViewValue, formatStatusToViewValue } from '../utils';

import './ViewForm.styles.scss';

interface Props {
  task: Task;
  ontaskStatusChange: (action: TaskChangeAction, comment: string) => void;
  onCancel: () => void;
  isDisabled: boolean;
}

export const ViewForm = (props: Props) => {
  const { task, ontaskStatusChange, onCancel, isDisabled } = props;

  const [comment, setComment] = React.useState('');

  return (
    <div className={'taskViewForm'}>
      <h3>Task info</h3>

      <ViewValueTemplate label={'Author'} value={task.user.name} />
      <ViewValueTemplate label={'Date'} value={formatDate(task.date)} />
      <ViewValueTemplate label={'Short description'} value={task.shortDescription} />
      <ViewValueTemplate label={'Full description'} value={task.fullDescription} />
      <ViewValueTemplate label={'Status'} value={formatStatusToViewValue(task.status)} />
      <ViewValueTemplate label={'Priority'} value={formatPriortyToViewValue(task.priority)} />
      <ViewValueTemplate label={'Severity'} value={formatSeverityToViewValue(task.severity)} />

      <h3>Change history</h3>

      <TextField
        label={'Comment'}
        value={comment}
        onChange={(e, newValue) => {
          const newComment: string = newValue ?? '';

          setComment(newComment);
        }}
        required={true}
        multiline={true}
        disabled={isDisabled}
      />

      <ViewFormToolbar
        taskStatus={task.status}
        onOpening={() => ontaskStatusChange(TaskChangeAction.opening, comment)}
        onSolving={() => ontaskStatusChange(TaskChangeAction.solving, comment)}
        onReturn={() => ontaskStatusChange(TaskChangeAction.opening, comment)}
        onClosing={() => ontaskStatusChange(TaskChangeAction.closing, comment)}
        onCancel={onCancel}
        canChangeStatus={comment.length === 0}
        isLoading={isDisabled}
      />

      <TaskHistory
        records={task.history}
      />
    </div>
  )
}
