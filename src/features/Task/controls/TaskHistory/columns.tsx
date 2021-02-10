import { IColumn } from "@fluentui/react";

import { taskChangeActionToString, HistoryRecord } from "src/common/types/HistoryRecord";
import { formatDate } from "src/common/utils/formatDate";

export const tasksHistoryColumns: IColumn[] = [
  {
    key: 'action',
    name: 'Action',
    fieldName: 'action',
    minWidth: 150,
    maxWidth: 150,
    data: 'number',
    onRender: (record: HistoryRecord) => <div>{taskChangeActionToString(record.action)}</div>,
  },
  {
    key: 'date',
    name: 'Date',
    fieldName: 'date',
    minWidth: 100,
    maxWidth: 100,
    onRender: (record: HistoryRecord) => <div>{formatDate(record.date)}</div>,
    data: 'string',
  },
  {
    key: 'user',
    name: 'User',
    fieldName: 'user',
    minWidth: 250,
    maxWidth: 250,
    data: 'string',
    onRender: (record: HistoryRecord) => <div>{record.user.name}</div>
  },
  {
    key: 'comment',
    name: 'Comment',
    fieldName: 'comment',
    minWidth: 210,
    data: 'string',
    onRender: (record: HistoryRecord) => <div className={'record-comment'}>{record.comment}</div>
  }
]