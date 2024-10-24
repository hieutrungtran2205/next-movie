'use client';

import Filter from '@/common/components/filter/Filter';
import { BACKGROUND_COLOR } from '@/common/utils/const';
import { Close, Menu, Search } from '@mui/icons-material';
import { AppBar, Box, Button, Drawer, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

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

  const [openSearch, setOpenSearch] = useState(false);

  const toggleDrawerSearch = (newOpen: boolean) => () => {
    setOpenSearch(newOpen);
  };

  useEffect(() => {
    setOpen(false);
    setOpenSearch(false);
  }, [pathname, queryString]);

  return (
    <AppBar
      position="fixed"
      className={trigger ? classes.appBarScrolled : classes.appBar}
      elevation={0} // Removes shadow
    >
      <Toolbar className={classes.toolbar} sx={{ px: { xs: 0, sm: 0, md: 5, lg: 20, xl: 30 } }}>
        <Link href="/">
          <Image width={100} height={100} src="/images/logo.png" alt="logo" />
        </Link>
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }, gap: 4, color: '#fcde56' }}>
          <Link href="/phim-moi">
            <Typography variant="h6">Phim mới</Typography>
          </Link>
          <Link href="/movie">
            <Typography variant="h6">Phim lẻ</Typography>
          </Link>
          <Link href="/tv">
            <Typography variant="h6">Phim chẵn</Typography>
          </Link>
        </Box>

        {!(open || openSearch) && (
          <Box display="flex" paddingX={2} gap={2}>
            <Search
              sx={{
                display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' },
                color: '#fcde56'
              }}
              onClick={toggleDrawerSearch(true)}
            />
            <Menu
              sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }, color: '#fcde56' }}
              onClick={toggleDrawer(true)}
            />
          </Box>
        )}
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: '50%',
              color: '#fcde56',
              boxSizing: 'border-box',
              backgroundColor: BACKGROUND_COLOR,
              opacity: 0.8
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}>
            <Button onClick={toggleDrawer(false)}>
              <Close sx={{ color: '#fcde56' }} />
            </Button>
          </Box>
          <List sx={{ pt: 0 }}>
            <Link href="/phim-moi">
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemText primary="Phim mới" />
              </ListItemButton>
            </Link>
            <Link href="/movie">
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemText primary="Phim lẻ" />
              </ListItemButton>
            </Link>{' '}
            <Link href="/tv">
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemText primary="Phim chẵn" />
              </ListItemButton>
            </Link>
          </List>
        </Drawer>
        <Drawer
          anchor="right"
          open={openSearch}
          onClose={toggleDrawerSearch(false)}
          sx={{
            '& .MuiDrawer-paper': {
              width: '100%',
              color: '#fcde56',
              boxSizing: 'border-box',
              backgroundColor: BACKGROUND_COLOR,
              opacity: 0.8
            }
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 1 }}>
            <Button onClick={toggleDrawerSearch(false)}>
              <Close sx={{ color: '#fcde56' }} />
            </Button>
          </Box>
          <Filter />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
