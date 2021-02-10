import { createContext } from "react";

import { AuthService } from "src/features/Authorization/service/AuthService";
import { FakeAuthService } from "src/features/Authorization/service/FakeAuthService";

import { TasksService } from "src/features/Task/services";
import { FakeTasksService } from "src/features/Task/services";


interface ServicesContextValue {
  authService: AuthService;
  tasksService: TasksService;
}

export const ServicesContext = createContext<ServicesContextValue>({
  tasksService: new FakeTasksService(),
  authService: new FakeAuthService()
});
