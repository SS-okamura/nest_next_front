"use client";

import React, { useContext, useState } from "react";
import {
  Container,
  Typography,
  Select,
  MenuItem,
  Button,
  List,
  ListItem,
  Box,
  makeStyles,
  Card,
  ListItemButton,
} from "@mui/material";
import { useTasks } from "../hooks/useTasks";
import { PomodoroTimerListContext } from "../providers/PomodoroTimerListContext";
import { KeyboardArrowRight } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Task {
  id: number;
  title: string;
}

const TaskSelectionComponent: React.FC = () => {
  const [selectedTasks, setSelectedTasks] = useState<Task[]>([]);
  const [originalTasks, setOriginalTasks] = useState<Task[]>([]);
  const [selectTask, setSelectTask] = useState<number | undefined>();
  const { tasks } = useTasks();
  const { setPomodoroTimerList, pomodoroTimerList } = useContext(
    PomodoroTimerListContext
  );

  const existingTasks: Task[] = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
  ];

  const handleTaskSelection = (taskId: number) => {
    const selectedTask = existingTasks.find((task) => task.id === taskId);

    if (
      selectedTask &&
      !selectedTasks.find((task) => task.id === selectedTask.id)
    ) {
      setSelectedTasks([...selectedTasks, selectedTask]);
    }
  };

  const handleCreateOriginalTasks = () => {
    const task = tasks.find((task) => task.id === selectTask);
    if (!task) return;
    setPomodoroTimerList([...pomodoroTimerList, task]);
    setSelectTask(undefined);
  };

  return (
    <Container
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage:
          "https://search.yahoo.co.jp/image/detail?p=%E3%83%88%E3%83%9E%E3%83%88%20%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88&imgurl=https%3A%2F%2Fmsp.c.yimg.jp%2Fimages%2Fv2%2FFUTi93tXq405grZVGgDqG47V6P_kNOvN3LEIvZZHLuybG6ovhKFMMJMGXakz4NBXiC-efUitQH7sCODlR7vRwm90JhBW3J-YgIjrLGHtUJvsXifMn1pMrblRCwpTS_UpO7yzTcxZUZKCyNqsB4lrR01YZOiv26wC5W84GmKMvR1AWVZNM12gczw7ZRVq8q4QbPgu78ze0M5Pz1Of4zCrZ2xJKMqeFVSnF1WR7mTXby0s1DgOPaYLNKV2joILLGXihKeuN9fhAbdjHRwZmp2TDMuImU5Xbny1MqM23ArEjVEYqTZrsAmGv8xZeYlc8Wq2A3VXmV0fJMZ7U3crbE6nGZ3tZPHQJ36csmxEeom2yqxSWa5YwaQcDiTUUQxtLY8jLJtObeJubPwcEYesqCpPw2RblVRZuCajphcI29c2GYAnUar01dIQdw08fYUPpf5sYLZALWUl4SV2S8fxICOswA%3D%3D%2FE38388E3839EE383882-E382B3E38394E383BC.png&refurl=https%3A%2F%2Fgreenstock40.com%2Ftomato02%2F&title=%E3%83%88%E3%83%9E%E3%83%88%E3%81%AE%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BD%9C02%EF%BD%9C%E3%83%95%E3%83%AA%E3%83%BC%E7%B4%A0%E6%9D%90%20-%20GreenStock40&domain=greenstock40.com&w=2000&h=2000&sig=cb4c5706918885875d5e893f4270aa6d2ad0b7d67a83a8f12227d9a3f44b69519fcbce12f143894fd6fad9ebc7a6be80c9367df4835061be3f9bdb151828e0a7",
      }}
    >
      <img
        src="/tomato.png"
        alt="My Image"
        style={{ width: "100px", height: "auto" }}
      />
      <Typography variant="h5">今日のタスク</Typography>
      <Select
        label="Select Task"
        onChange={(e) => setSelectTask(Number(e.target.value))}
        sx={{ m: 3, width: "20%" }}
      >
        {tasks.map((task) => (
          <MenuItem key={task.id} value={task.id}>
            {task.title}
          </MenuItem>
        ))}
      </Select>

      <Button variant="contained" onClick={handleCreateOriginalTasks}>
        ADD
      </Button>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h6">Selected Tasks</Typography>
        <List>
          {pomodoroTimerList.map((task: Task) => {
            return (
              <Card variant="outlined" key={task.id}>
                <ListItem>
                  <ListItemButton>
                    <Typography>{task.title}</Typography>
                    <KeyboardArrowRight />
                  </ListItemButton>{" "}
                  <Button>
                    <DeleteIcon />
                  </Button>
                </ListItem>
              </Card>
            );
          })}
        </List>
      </Box>
    </Container>
  );
};

export default TaskSelectionComponent;
