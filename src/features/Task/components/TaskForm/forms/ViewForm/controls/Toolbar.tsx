import * as React from 'react';

import { DefaultButton } from '@fluentui/react';

import { TaskStatus } from "src/common/types"

interface Props {
  taskStatus: TaskStatus;
  onOpening: () => void;
  onSolving: () => void;
  onReturn: () => void;
  onClosing: () => void;
  onCancel: () => void;
  canChangeStatus: boolean;
  isLoading: boolean;
}

export const ViewFormToolbar = (props: Props) => {
  const { taskStatus, onOpening, onSolving, onReturn, onClosing, onCancel, canChangeStatus, isLoading } = props;

  const actionsIsDisabled = canChangeStatus || isLoading;

  return (
    <div className={'viewFormToolbar'}>
      {
        taskStatus === TaskStatus.new && (
          <DefaultButton
            text={'Open'}
            onClick={onOpening}
            disabled={actionsIsDisabled}
            primary={true}
          />
        )
      }

      {
        taskStatus === TaskStatus.open && (
          <DefaultButton
            text={'Solve'}
            onClick={onSolving}
            disabled={actionsIsDisabled}
            primary={true}
          />
        )
      }

      {
        taskStatus === TaskStatus.solved && (
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