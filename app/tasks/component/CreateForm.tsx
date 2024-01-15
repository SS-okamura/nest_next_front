"use client";

import {
  CssBaseline,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useState } from "react";
import { useTasks } from "@/app/hooks/useTasks";
import { TaskModel } from "@/app/model/TaskModel";

export default function CreateForm({
  targetTask,
}: {
  targetTask: TaskModel | undefined;
}) {
  const [title, setTitle] = useState<string>("");
  const [status, setStatus] = useState<string>("waiting");
  const { createTask } = useTasks();

  useEffect(() => {
    if (!targetTask?.title) return;
    console.log("targetTask?.title", targetTask?.title);
    setTitle(targetTask?.title);
    setStatus(targetTask?.status ?? "waiting");
  }, [targetTask]);

  return (
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
        <img
          src="/plus.svg"
          alt="My Image"
          style={{ width: "50px", height: "auto" }}
        />
        <Typography component="h1" variant="h5">
          ADD TASK
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={() => {
            return createTask(title, status);
          }}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="title"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={(e: SelectChangeEvent<string>) => {
                  return setStatus(e.target.value);
                }}
              >
                <MenuItem value={"waiting"}>waiting</MenuItem>
                <MenuItem value={"running"}>running</MenuItem>
                <MenuItem value={"done"}>done</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Task
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
