import { FakeAuthService } from "src/features/Authorization/service/FakeAuthService";

import { FakeTasksService } from "src/features/Task/services";
import { ServicesContext } from "./ServicesContext";

const tasksService = new FakeTasksService();
const authService = new FakeAuthService();

export const FakeServicesContextProvider: React.FunctionComponent = ({ children }) => {
  return (
    <ServicesContext.Provider
      value={{
        authService,
        tasksService
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}