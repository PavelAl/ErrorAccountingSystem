import { FakeTasksService } from "src/features/Task/services";
import { ServicesContext } from "./ServicesContext";

const tasksService = new FakeTasksService();

export const FakeServicesContextProvider: React.FunctionComponent = ({ children }) => {

  return (
    <ServicesContext.Provider
      value={{
        tasksService: tasksService
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}