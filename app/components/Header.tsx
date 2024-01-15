"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import {
  Modal,
  CssBaseline,
  Container,
  Grid,
  InputLabel,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { TimerContext } from "../providers/TimerContext";

export default function Header() {
  const router = useRouter();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);

  const { initialTime, setInitialTime, breakTime, setBreakTime } =
    React.useContext(TimerContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(true);
    setAnchorEl(null);
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
  const handleTitleClick = () => {
    router.push("/");
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => {
              handleTitleClick();
            }}
          >
            Todo + Pomodoro
          </Typography>
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
              style={{ width: "50px", height: "auto" }}
            />
          </IconButton>
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
              style={{ width: "50px", height: "auto" }}
            />
          </IconButton>
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
              style={{ width: "50px", height: "auto" }}
            />
          </IconButton>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>setting</MenuItem>
              </Menu>
            </div>
          )}
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
              height: "80%",
            }}
          >
            <Container
              component="main"
              maxWidth="xs"
              sx={{ background: "white" }}
            >
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "80%",
                }}
              >
                <img
                  src="/setting.png"
                  alt="My Image"
                  style={{ width: "150px", height: "auto" }}
                />
                <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
                  SETTING
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="作業時間"
                      value={initialTime}
                      required
                      fullWidth
                      id="initial"
                      label="作業時間"
                      autoFocus
                      type="number"
                      onChange={(e) => setInitialTime(Number(e.target.value))}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mb: 5 }}>
                    <TextField
                      autoComplete="given-name"
                      value={breakTime}
                      name="休憩時間"
                      required
                      fullWidth
                      id="break"
                      label="休憩時間"
                      autoFocus
                      type="number"
                      onChange={(e) => setBreakTime(Number(e.target.value))}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Modal>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
