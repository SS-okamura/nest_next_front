import { createContext } from "react";
import { TaskModel } from "../model/TaskModel";

export const PomodoroTimerListContext = createContext({
  pomodoroTimerList: [] as TaskModel[],
  setPomodoroTimerList: (value: TaskModel[]) => {},
});
