import { createContext } from "react";

import { TasksService } from "src/features/Task/services";
import { FakeTasksService } from "src/features/Task/services";

interface ServicesContextValue {
  tasksService: TasksService;
}

export const ServicesContext = createContext<ServicesContextValue>({
  tasksService: new FakeTasksService()
});
