export interface KanbanBoardProps<T> {
  columns: KanbanBoardColumn<T>[];
  onKanbanClick: (kanban: Kanban) => void;
}

export interface KanbanBoardColumn<T> {
  key: string;
  title: string;
  kanbans: Kanban[];
}

export interface Kanban {
  key: string;
  title: string;
  description: string;
  type: KanbanType;
}

export enum KanbanType {
  common, warning, new
}