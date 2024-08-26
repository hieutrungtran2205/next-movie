"use client";

import { BACKGROUND_COLOR } from "@/common/utils/const";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: BACKGROUND_COLOR, // Transparent background
    color: "#fff",
    transition: theme.transitions?.create(["background-color", "color"], {
      duration: theme.transitions.duration.standard,
    }),
  },
  appBarScrolled: {
    backgroundColor: BACKGROUND_COLOR, // Change background color on scroll
    opacity: 0.7,
    color: "#ccc",
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    gap: 32,
  },
}));

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();

  // Detect scroll to change header style
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return (
    <AppBar
      position="fixed"
      className={trigger ? classes.appBarScrolled : classes.appBar}
      elevation={0} // Removes shadow
    >
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Phim mới</Typography>
        <Typography variant="h6">Phim lẻ</Typography>
        <Typography variant="h6">Phim chẵn</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
