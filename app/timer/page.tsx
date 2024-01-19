"use client";

import React, { useState, useEffect, useContext } from "react";
import {
  Typography,
  Button,
  CircularProgress,
  Box,
  Card,
  List,
  ListItem,
  ListItemButton,
  Modal,
  Avatar,
  Container,
  CssBaseline,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Task } from "../tasks/page";
import { PomodoroTimerListContext } from "../providers/PomodoroTimerListContext";
import { title } from "process";
import { TimerContext } from "../providers/TimerContext";

const Timer = () => {
  const { initialTime, breakTime } = useContext(TimerContext);
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const { setPomodoroTimerList, pomodoroTimerList } = useContext(
    PomodoroTimerListContext
  );
  const [count, setCount] = useState(0);
  const [breakFlg, setBreakFlg] = useState(false);
  const [open, setOpen] = useState(false);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => Math.max(0, prevTime - 1));
      }, 1000);

      return () => clearInterval(timer);
    }
    if (timeRemaining === 0) {
      if (breakFlg) {
        setTimeRemaining(initialTime);
        setCount(count + 1);
      } else {
        setOpen(true);
        setTimeRemaining(breakTime);
      }
      setBreakFlg(!breakFlg);
    }
  }, [breakFlg, count, timeRemaining]);

  const handleReset = () => {
    setTimeRemaining(initialTime);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <img
        src="/timer.png"
        alt="My Image"
        style={{ width: "200px", height: "auto" }}
      />
      <Typography variant="h3" gutterBottom>
        {formatTime(timeRemaining)}
      </Typography>
      <CircularProgress
        variant="determinate"
        value={(timeRemaining / initialTime) * 100}
        size={150}
        thickness={2}
        color="error"
      />
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleReset}>
          Reset
        </Button>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h6">今日のタスク</Typography>
        <List>
          {pomodoroTimerList.map((task: Task, index: number) => {
            if (count === index) {
              return (
                <Card
                  variant="outlined"
                  key={task.id}
                  sx={{ background: "tomato" }}
                >
                  <ListItem>
                    <ListItemButton>
                      <Typography>{task.title}</Typography>
                      <KeyboardArrowRight />
                    </ListItemButton>{" "}
                  </ListItem>
                </Card>
              );
            }
            return (
              <Card variant="outlined" key={task.id}>
                <ListItem>
                  <ListItemButton>
                    <Typography>{task.title}</Typography>
                    <KeyboardArrowRight />
                  </ListItemButton>{" "}
                </ListItem>
              </Card>
            );
          })}
        </List>
      </Box>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        sx={{
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container component="main" maxWidth="xs" sx={{ background: "white" }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5" sx={{ mb: 5 }}>
              success
            </Typography>
            <img
              src="/eat_tomato.png"
              alt="My Image"
              style={{ width: "300px", height: "auto" }}
            />
          </Box>
        </Container>
      </Modal>
    </Box>
  );
};

export default Timer;
