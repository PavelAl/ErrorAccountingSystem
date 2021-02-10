import * as React from 'react';

import { SelectionMode, DetailsList } from '@fluentui/react';

import { HistoryRecord } from 'src/common/types';

import { tasksHistoryColumns } from './columns';

import './TaskHistory.styles.scss'

interface Props {
  records: HistoryRecord[];
}

export const TaskHistory = (props: Props) => {
  const { records } = props;

  return (
    <div className={'taskHistory'}>
      <DetailsList
        items={records}
        columns={tasksHistoryColumns}
        selectionMode={SelectionMode.none}
      />
    </div>
  )
}
