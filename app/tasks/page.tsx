"use client";

import { KeyboardArrowRight } from "@mui/icons-material";
import {
  CssBaseline,
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import Home from "../page";
import axios from "axios";

export type Task = {
  id: number;
  title: string;
};

export default function TaskList() {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    setTasks();
  }, []);

  const setTasks = async () => {
    await axios.get("/api/task/list").then((value) => {
      setTaskList(value.data);
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <List>
          <ListItem>
            {taskList.map((task: Task) => {
              return (
                <ListItemButton key={task.id}>
                  <Typography>{task.title}</Typography>
                  <KeyboardArrowRight />
                </ListItemButton>
              );
            })}
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}
