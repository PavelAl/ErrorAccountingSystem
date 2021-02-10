import * as React from 'react';

import { Dropdown, TextField } from '@fluentui/react';

import { ErrorPriority, ErrorSeverity, TestingError } from 'src/common/types';

interface Props {
  error: TestingError;
  setError: (newError: TestingError) => void;
}

export const NewForm = (props: Props) => {
  const { error, setError } = props;

  return (
    <div className={'newForm'}>
      <TextField
        label={'Short description'}
        value={error.shortDescription}
        onChange={(e, newValue) => {
          const shortDescription: string = newValue ?? '';

          setError({ ...error, shortDescription });
        }}
      />

      <TextField
        label={'Full description'}
        value={error.fullDescription}
        onChange={(e, newValue) => {
          const fullDescription: string = newValue ?? '';

          setError({ ...error, fullDescription });
        }}
        multiline={true}
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
    </div>
  )
}