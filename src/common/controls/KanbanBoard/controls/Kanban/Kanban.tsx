import { getTheme } from "@fluentui/react";
import { Kanban as KanbanElement } from "../../KanbanBoard.types";

import './Kanban.styles.scss';

const theme = getTheme();

interface Props {
  kanban: KanbanElement;
  onClick: () => void;
}

export const Kanban = (props: Props) => {
  const { kanban, onClick } = props;

  return (
    <div
      className={'kanban'}
      onClick={onClick}
    >
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