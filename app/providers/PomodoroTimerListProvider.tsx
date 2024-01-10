"use client";

import { FC, ReactNode, useState } from "react";
import { createContext } from "vm";
import { TaskModel } from "../model/TaskModel";
import { PomodoroTimerListContext } from "./PomodoroTimerListContext";

const PomodoroTimerListProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pomodoroTimerList, setPomodoroTimerList] = useState<TaskModel[]>([]);

  return (
    <PomodoroTimerListContext.Provider
      value={{
        pomodoroTimerList,
        setPomodoroTimerList,
      }}
    >
      {children}
    </PomodoroTimerListContext.Provider>
  );
};

export default PomodoroTimerListProvider;
