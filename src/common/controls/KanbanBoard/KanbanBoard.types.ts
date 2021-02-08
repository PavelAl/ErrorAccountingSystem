export interface KanbanBoardProps<T> {
  columns: KanbanBoardColumn<T>[];
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