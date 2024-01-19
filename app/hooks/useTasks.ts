"use client";
import { useEffect, useState } from "react";
import { TaskModel, TaskStatus } from "../model/TaskModel";
import axios from "axios";
import { REQUEST_DATA } from "../constants/requestdata";

export const useTasks = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [task, setTask] = useState<TaskModel | undefined>();

  useEffect(() => {
    readAllTasks();
  }, []);

  const readAllTasks = async () => {
    const res = await axios.get(REQUEST_DATA.TASK);
    setTasks(res.data);
  };

  const createTask = async (title: string, status: string) => {
    if (!title) return;
    await axios.post(REQUEST_DATA.TASK, { title: title, status: status });
    readAllTasks();
  };

  const deleteTask = async (id: number) => {
    const url = REQUEST_DATA.TASK + id;
    await axios.delete(url);
    readAllTasks();
  };

  return {
    task,
    setTask,
    tasks,
    setTasks,
    readAllTasks,
    createTask,
    deleteTask,
  };
};
