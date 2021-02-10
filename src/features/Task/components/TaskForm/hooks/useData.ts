import { useEffect, useState } from "react";

import { useAuth } from "src/features/Authorization";
import { TaskChangeAction, Task } from "src/common/types"

import { TaskFormProps } from "../TaskForm.types"
import { addCommentToNewTask, createNewTask } from "./utils";

export const useTaskFormData = (props: TaskFormProps) => {
  const { taskId, tasksService } = props;
  const { user } = useAuth();

  const [task, setTask] = useState<Task | undefined>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log(taskId);
    (async () => {
      if (typeof taskId !== 'undefined') {
        const selectedTask = await tasksService.getTaskById(taskId);

        setTask(selectedTask);
      } else {
        setTask(createNewTask(user));
      }

      setLoading(false);
    })()
  }, [taskId, tasksService, user])

  const onCreateTask = async (task: Task, comment: string) => {
    setLoading(true);

    await tasksService.createTask(addCommentToNewTask(task, comment));

    setLoading(false);
  }

  const ontaskStatusChange = async (action: TaskChangeAction, comment: string) => {
    setLoading(true);

    if (task && user) {
      await tasksService.changetaskStatus({
        taskId: task.id,
        date: new Date().toISOString(),
        action,
        comment,
        user
      });
    }

    setLoading(false);
  }

  return { task, isLoading, onCreateTask, ontaskStatusChange }
}
