"use client";

import { Copyright, KeyboardArrowRight } from "@mui/icons-material";
import {
  CssBaseline,
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemButton,
  Button,
  Modal,
  Avatar,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Card,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import Home from "../page";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import CreateForm from "./component/CreateForm";
import { REQUEST_DATA } from "../constants/requestdata";
import { useTasks } from "../hooks/useTasks";
import { TaskModel } from "../model/TaskModel";

export type Task = {
  id: number;
  title: string;
};

export default function TaskList() {
  const { deleteTask, tasks, setTask, task } = useTasks();
  const [taskList, setTaskList] = useState([]);
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    setTasks();
  }, []);

  const setTasks = async () => {
    await axios.get(REQUEST_DATA.TASK).then((value) => {
      setTaskList(value.data);
    });
  };

  const detailTask = (task: TaskModel) => {
    console.log(task);
    setTask(task);
    setOpen(true);
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
        <img
          src="/Todo.jpeg"
          alt="My Image"
          style={{ width: "150px", height: "auto" }}
        />

        <List sx={{ mt: 3 }}>
          {tasks.map((task: TaskModel) => {
            return (
              <Card variant="outlined" key={task.id}>
                <ListItem>
                  <ListItemButton
                    onClick={() => {
                      detailTask(task);
                    }}
                  >
                    <Typography>{task.title}</Typography>
                    <KeyboardArrowRight />
                  </ListItemButton>{" "}
                  <Button onClick={() => deleteTask(task.id)}>
                    <DeleteIcon />
                  </Button>
                </ListItem>
              </Card>
            );
          })}
        </List>
        <Button
          startIcon={<AddIcon />}
          onClick={() => {
            setOpen(true);
          }}
        >
          新しいタスク
        </Button>
      </Box>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => {
          setOpen(false);
          setTask(undefined);
        }}
        sx={{
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CreateForm targetTask={task} />
      </Modal>
    </Container>
  );
}
