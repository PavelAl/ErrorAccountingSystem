import * as React from 'react';

import { SelectionMode, ShimmeredDetailsList } from '@fluentui/react';

import { ErrorHistoryRecord } from 'src/common/types';

import { errorsHistoryColumns } from './columns';

import './ErrorHistory.styles.scss'

interface Props {
  records: ErrorHistoryRecord[];
}

export const ErrorHistory = (props: Props) => {
  return (
    <div className={'errorsHistory'}>
      <ShimmeredDetailsList
        items={[]}
        columns={errorsHistoryColumns}
        shimmerLines={4}
        selectionMode={SelectionMode.none}
      />
    </div>
  )
}
