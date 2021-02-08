import * as React from 'react';

import { Kanban } from './controls';

import { KanbanBoardProps } from './KanbanBoard.types';
import './KanbanBoard.styles.scss';

export const KanbanBoard = <T,>(props: KanbanBoardProps<T>) => {
  const { columns } = props;

  return (
    <div className={'kanbanBoard'}>
      {
        columns.map((column) => {
          const columnKey = column.key;

          return (
            <div key={columnKey} className={'column'}>
              <div className={'title'}>
                {column.title}
              </div>

              {
                column.kanbans.map((kanban) => {
                  return (
                    <Kanban
                      key={kanban.key}
                      kanban={kanban}
                    />
                  );
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}
