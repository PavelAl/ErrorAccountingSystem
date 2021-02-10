import { useEffect, useState } from "react";

import { Task } from "src/common/types"

import { TaskBoardProps } from "../TaskBoard.types";

export const useTaskBoardData = (props: TaskBoardProps) => {
  const { tasksService } = props;

  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const newTasks = await tasksService.getTasks();

      setTasks(newTasks);

      setLoading(false);
    })()
  }, [tasksService])

  return { tasks, isLoading }
}
