import * as React from 'react';

import { DefaultButton } from '@fluentui/react';

import { ErrorStatus } from "src/common/types"

interface Props {
  errorStatus: ErrorStatus;
  onOpening: () => void;
  onSolving: () => void;
  onReturn: () => void;
  onClosing: () => void;
  onCancel: () => void;
  isDisabled: boolean;
  isLoading: boolean;
}

export const ViewFormToolbar = (props: Props) => {
  const { errorStatus, onOpening, onSolving, onReturn, onClosing, onCancel, isDisabled, isLoading } = props;

  const actionsIsDisabled = isDisabled || isLoading;

  return (
    <div className={'viewFormToolbar'}>
      {
        errorStatus === ErrorStatus.new && (
          <DefaultButton
            text={'Open'}
            onClick={onOpening}
            disabled={actionsIsDisabled}
            primary={true}
          />
        )
      }

      {
        errorStatus === ErrorStatus.open && (
          <DefaultButton
            text={'Solve'}
            onClick={onSolving}
            disabled={actionsIsDisabled}
            primary={true}
          />
        )
      }

      {
        errorStatus === ErrorStatus.solved && (
          <>
            <DefaultButton
              text={'Return'}
              onClick={onReturn}
              disabled={actionsIsDisabled}
              primary={true}
            />
            <DefaultButton
              text={'Close'}
              onClick={onClosing}
              disabled={actionsIsDisabled}
              primary={true}
            />
          </>
        )
      }

      <DefaultButton
        text={'Cancel'}
        onClick={onCancel}
        disabled={isLoading}
      />
    </div >
  )
}