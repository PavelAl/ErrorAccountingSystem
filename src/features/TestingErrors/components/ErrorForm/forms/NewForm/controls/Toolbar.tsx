import * as React from 'react';

import { DefaultButton } from '@fluentui/react';

interface Props {
  onCreate: () => void;
  onCancel: () => void;
  isDisabled: boolean;
  isLoading: boolean;
}

export const NewFormToolbar = (props: Props) => {
  const { onCreate, onCancel, isDisabled, isLoading } = props;

  const actionsIsDisabled = isDisabled || isLoading;

  return (
    <div className={'newFormToolbar'}>
      <DefaultButton
        text={'Create'}
        onClick={onCreate}
        disabled={actionsIsDisabled}
        primary={true}
      />

      <DefaultButton
        text={'Cancel'}
        onClick={onCancel}
        disabled={isLoading}
      />
    </div >
  )
}