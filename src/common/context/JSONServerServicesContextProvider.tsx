import { JSONServiceTasksService } from "src/features/Task/services/JSONServiceTaskService";
import { FakeAuthService } from "../auth/service/FakeAuthService";
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