import { FakeTasksService } from "src/features/Task/services";
import { FakeAuthService } from "../auth/service/FakeAuthService";
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