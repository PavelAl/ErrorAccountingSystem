import * as React from 'react';

import { Dropdown, TextField } from '@fluentui/react';

import { ErrorFormProps } from './ErrorForm.types';
import './ErrorForm.styles.scss';

export const ErrorForm = (props: ErrorFormProps) => {
  return (
    <div className={'errorForm'}>
      <TextField
        label={'Short description'}
      />

      <TextField
        label={'Full description'}
        multiline={true}
      />

      <Dropdown
        label={'Priority'}
        options={[
          { key: 'low', text: 'Low' },
          { key: 'medium', text: 'Medium' },
          { key: 'high', text: 'High' },
          { key: 'veryHigh', text: 'Very high' }
        ]}
      />

      <Dropdown
        label={'Severity'}
        options={[
          { key: 'critical', text: 'Critical' },
          { key: 'significant', text: 'Significant' },
          { key: 'minor', text: 'Minor' },
          { key: 'changeRequest', text: 'Change request' }
        ]}
      />
    </div>
  )
}