import { IColumn } from "@fluentui/react";

import { ErrorHistoryRecord } from "src/common/types/ErrorHistoryRecord";
import { formatDate } from "src/common/utils/formatDate";

export const errorsHistoryColumns: IColumn[] = [
  {
    key: 'action',
    name: 'Action',
    fieldName: 'action',
    minWidth: 150,
    maxWidth: 150,
    data: 'number',
  },
  {
    key: 'date',
    name: 'Date',
    fieldName: 'date',
    minWidth: 100,
    maxWidth: 100,
    onRender: (item: ErrorHistoryRecord) => <div>{formatDate(item.date)}</div>,
    data: 'string',
  },
  {
    key: 'user',
    name: 'User',
    fieldName: 'user',
    minWidth: 250,
    maxWidth: 250,
    data: 'string',
    onRender: (item: ErrorHistoryRecord) => <div>{item.user.name}</div>
  },
  {
    key: 'comment',
    name: 'Comment',
    fieldName: 'comment',
    minWidth: 210,
    data: 'string',
    onRender: (item: ErrorHistoryRecord) => <div className={'record-comment'}>{item.comment}</div>
  }
]