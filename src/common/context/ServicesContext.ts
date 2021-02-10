import { createContext } from "react";

import { TasksService } from "src/features/Task/services";
import { FakeTasksService } from "src/features/Task/services";

import { AuthService } from "../auth/service/AuthService";
import { FakeAuthService } from "../auth/service/FakeAuthService";

interface ServicesContextValue {
  authService: AuthService;
  tasksService: TasksService;
}

export const ServicesContext = createContext<ServicesContextValue>({
  tasksService: new FakeTasksService(),
  authService: new FakeAuthService()
});
