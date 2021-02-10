import * as React from 'react';

import { Dropdown, TextField } from '@fluentui/react';

import { ErrorPriority, ErrorSeverity, TestingError } from 'src/common/types';
import { NewFormToolbar } from './controls';

import './NewForm.styles.scss';

interface Props {
  error: TestingError;
  onCreate: (error: TestingError, comment: string) => void;
  onCancel: () => void;
}

export const NewForm = (props: Props) => {
  const { error: propsError, onCreate, onCancel } = props;

  const [error, setError] = React.useState(propsError);
  const [comment, setComment] = React.useState('');

  return (
    <div className={'errorNewForm'}>
      <TextField
        label={'Short description'}
        value={error.shortDescription}
        onChange={(e, newValue) => {
          const shortDescription: string = newValue ?? '';

          setError({ ...error, shortDescription });
        }}
        required={true}
      />

      <TextField
        label={'Full description'}
        value={error.fullDescription}
        onChange={(e, newValue) => {
          const fullDescription: string = newValue ?? '';

          setError({ ...error, fullDescription });
        }}
        multiline={true}
        required={true}
      />

      <Dropdown
        label={'Priority'}
        options={[
          { key: ErrorPriority.low, text: 'Low' },
          { key: ErrorPriority.medium, text: 'Medium' },
          { key: ErrorPriority.high, text: 'High' },
          { key: ErrorPriority.veryHigh, text: 'Very high' }
        ]}
        selectedKey={error.priority}
        onChange={(e, option) => {
          const priority: ErrorPriority = option?.key.toString() as ErrorPriority ?? ErrorPriority.low;

          setError({ ...error, priority })
        }}
      />

      <Dropdown
        label={'Severity'}
        options={[
          { key: ErrorSeverity.changeRequest, text: 'Change request' },
          { key: ErrorSeverity.minor, text: 'Minor' },
          { key: ErrorSeverity.critical, text: 'Critical' },
          { key: ErrorSeverity.significant, text: 'Significant' }
        ]}
        selectedKey={error.severity}
        onChange={(e, option) => {
          const severity: ErrorSeverity = option?.key.toString() as ErrorSeverity ?? ErrorSeverity.changeRequest;

          setError({ ...error, severity })
        }}
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
        onCreate={() => onCreate(error, comment)}
        onCancel={onCancel}
        isDisabled={!errorIsValid(error)}
        isLoading={false}
      />
    </div>
  )
}

function errorIsValid(error: TestingError) {
  return error.shortDescription.length > 0 && error.fullDescription.length > 0
}