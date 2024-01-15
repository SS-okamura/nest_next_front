"use client";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";

export default function Footer() {
  const [value, setValue] = useState();
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{ background: "#dbdbdb", position: "relative" }}
    >
      <BottomNavigationAction label="pomodoro timer" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<ArchiveIcon />} />
    </BottomNavigation>
  );
}
