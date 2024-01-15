import { createContext } from "react";
import { TaskModel } from "../model/TaskModel";

export const TimerContext = createContext({
  initialTime: 10,
  setInitialTime: (value: number) => {},
  breakTime: 5,
  setBreakTime: (value: number) => {},
});
