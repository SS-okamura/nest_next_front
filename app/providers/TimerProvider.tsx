"use client";

import { FC, ReactNode, useState } from "react";
import { createContext } from "vm";
import { TaskModel } from "../model/TaskModel";
import { PomodoroTimerListContext } from "./PomodoroTimerListContext";
import { TimerContext } from "./TimerContext";

const TimerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [initialTime, setInitialTime] = useState(10);
  const [breakTime, setBreakTime] = useState(5);

  return (
    <TimerContext.Provider
      value={{
        initialTime,
        setInitialTime,
        breakTime,
        setBreakTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
