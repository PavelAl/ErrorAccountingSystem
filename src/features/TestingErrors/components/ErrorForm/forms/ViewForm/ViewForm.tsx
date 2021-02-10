import * as React from 'react';

import { TextField } from '@fluentui/react';

import { ErrorHistory } from '../../../ErrorHistory';
import { ViewFormToolbar } from './controls';

import { ErrorStatus, TestingError } from 'src/common/types';
import { formatDate } from 'src/common/utils';

import { ViewValueTemplate } from './ViewValueTemplate';

import { formatPriortyToViewValue, formatSeverityToViewValue, formatStatusToViewValue } from '../utils';

import './ViewForm.styles.scss';

interface Props {
  error: TestingError;
  onErrorStatusChange: (newStatus: ErrorStatus, comment: string) => void;
  onCancel: () => void;
}

export const ViewForm = (props: Props) => {
  const { error, onErrorStatusChange, onCancel } = props;

  const [comment, setComment] = React.useState('');

  return (
    <div className={'errorViewForm'}>
      <h3>Error info</h3>

      <ViewValueTemplate label={'Author'} value={error.user.name} />
      <ViewValueTemplate label={'Date'} value={formatDate(error.date)} />
      <ViewValueTemplate label={'Short description'} value={error.shortDescription} />
      <ViewValueTemplate label={'Full description'} value={error.fullDescription} />
      <ViewValueTemplate label={'Status'} value={formatStatusToViewValue(error.status)} />
      <ViewValueTemplate label={'Priority'} value={formatPriortyToViewValue(error.priority)} />
      <ViewValueTemplate label={'Severity'} value={formatSeverityToViewValue(error.severity)} />

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
      />

      <ViewFormToolbar
        errorStatus={error.status}
        onOpening={() => onErrorStatusChange(ErrorStatus.open, comment)}
        onSolving={() => onErrorStatusChange(ErrorStatus.solved, comment)}
        onReturn={() => onErrorStatusChange(ErrorStatus.open, comment)}
        onClosing={() => onErrorStatusChange(ErrorStatus.closed, comment)}
        onCancel={onCancel}
        isDisabled={comment.length === 0}
        isLoading={false}
      />

      <ErrorHistory
        records={error.history}
      />
    </div>
  )
}
