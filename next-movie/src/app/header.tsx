'use client';

import { BACKGROUND_COLOR } from '@/common/utils/const';
import { Close, Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import React, { useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    backgroundColor: BACKGROUND_COLOR, // Transparent background
    color: '#fff',
    transition: theme.transitions?.create(['background-color', 'color'], {
      duration: theme.transitions.duration.standard
    })
  },
  appBarScrolled: {
    backgroundColor: BACKGROUND_COLOR, // Change background color on scroll
    opacity: 0.7,
    color: '#ccc'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 32
  }
}));

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();

  // Detect scroll to change header style
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50
  });

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      className={trigger ? classes.appBarScrolled : classes.appBar}
      elevation={0} // Removes shadow
    >
      <Toolbar className={classes.toolbar} sx={{ px: { xs: 0, sm: 0, md: 5, lg: 20, xl: 20 } }}>
        <Image width={100} height={100} src="/images/logo.png" alt="logo" />
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, gap: 4 }}>
          <Typography variant="h6">Phim mới</Typography>
          <Typography variant="h6">Phim lẻ</Typography>
          <Typography variant="h6">Phim chẵn</Typography>
        </Box>
        {!open && (
          <Button
            sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <Menu sx={{ color: '#ffde59' }} />
          </Button>
        )}
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: '50%',
              color: '#ffde59',
              boxSizing: 'border-box',
              backgroundColor: BACKGROUND_COLOR,
              opacity: 0.8
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', py: 1 }}>
            <Button onClick={toggleDrawer(false)}>
              <Close sx={{ color: '#ffde59' }} />
            </Button>
          </Box>
          <List sx={{ pt: 0 }}>
            <ListItemButton>
              <ListItemText primary="Phim mới" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Phim lẻ" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Phim chẵn" />
            </ListItemButton>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
