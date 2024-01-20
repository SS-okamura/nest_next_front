"use client";

import { Box, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState();
  const router = useRouter();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const t = await fetch("/api/user/name");
    console.log("T", t);
    fetch("/api/user/name")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  type User = {
    id: number;
    name: string;
  };

  const handleTimerClick = () => {
    router.push("/timer");
  };

  const handleTaskClick = () => {
    router.push("/tasks");
  };

  const handlePomodoroClick = () => {
    router.push("/pomodoro");
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Box sx={{ mr: 2 }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => handleTaskClick()}
        >
          <img
            src="/Todo.jpeg"
            alt="My Image"
            style={{ width: "300px", height: "auto" }}
          />
        </IconButton>
      </Box>
      <Box sx={{ mr: 5 }}>
        <img
          src="/plus.svg"
          alt="My Image"
          style={{ width: "100px", height: "auto" }}
        />
      </Box>
      <Box sx={{ mr: 5 }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => handlePomodoroClick()}
        >
          <img
            src="/tomato.png"
            alt="My Image"
            style={{ width: "300px", height: "auto" }}
          />
        </IconButton>
      </Box>
      <Box sx={{ mr: 5 }}>
        <img
          src="/plus.svg"
          alt="My Image"
          style={{ width: "100px", height: "auto" }}
        />
      </Box>
      <Box sx={{ mr: 5 }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => {
            handleTimerClick();
          }}
        >
          <img
            src="/timer.png"
            alt="My Image"
            style={{ width: "300px", height: "auto" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
