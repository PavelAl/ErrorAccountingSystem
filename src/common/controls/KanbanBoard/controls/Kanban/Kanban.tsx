import { getTheme } from "@fluentui/react";
import { Kanban as KanbanElement } from "../../KanbanBoard.types";

import './Kanban.styles.scss';

const theme = getTheme();

interface Props {
  kanban: KanbanElement;
}

export const Kanban = (props: Props) => {
  const { kanban } = props;

  return (
    <div className={'kanban'}>
      <div
        className={'kanban-title'}
        style={{ color: theme.palette.themeDark }}
      >
        {kanban.title}
      </div>

      <div className={'kanban-description'}>{kanban.description}</div>
    </div>
  )
}