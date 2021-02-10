import { FakeAuthService } from "src/features/Authorization/service/FakeAuthService";
import { JSONServiceTasksService } from "src/features/Task/services/JSONServiceTaskService";
import { ServicesContext } from "./ServicesContext";

const tasksService = new JSONServiceTasksService(`http://localhost:5000`);
const authService = new FakeAuthService();

export const JSONServerServicesContextProvider: React.FunctionComponent = ({ children }) => {
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