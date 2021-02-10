import { IColumn } from "@fluentui/react";

import { errorHistoryActionToString, ErrorHistoryRecord } from "src/common/types/ErrorHistoryRecord";
import { formatDate } from "src/common/utils/formatDate";

export const errorsHistoryColumns: IColumn[] = [
  {
    key: 'action',
    name: 'Action',
    fieldName: 'action',
    minWidth: 150,
    maxWidth: 150,
    data: 'number',
    onRender: (record: ErrorHistoryRecord) => <div>{errorHistoryActionToString(record.action)}</div>,
  },
  {
    key: 'date',
    name: 'Date',
    fieldName: 'date',
    minWidth: 100,
    maxWidth: 100,
    onRender: (record: ErrorHistoryRecord) => <div>{formatDate(record.date)}</div>,
    data: 'string',
  },
  {
    key: 'user',
    name: 'User',
    fieldName: 'user',
    minWidth: 250,
    maxWidth: 250,
    data: 'string',
    onRender: (record: ErrorHistoryRecord) => <div>{record.user.name}</div>
  },
  {
    key: 'comment',
    name: 'Comment',
    fieldName: 'comment',
    minWidth: 210,
    data: 'string',
    onRender: (record: ErrorHistoryRecord) => <div className={'record-comment'}>{record.comment}</div>
  }
]