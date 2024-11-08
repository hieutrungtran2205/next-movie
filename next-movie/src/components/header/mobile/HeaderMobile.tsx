'use client';

import Filter from '@/components/filter/Filter';
import { BACKGROUND_COLOR } from '@/utils/const';
import { Close, Menu, Search } from '@mui/icons-material';
import { AppBar, Box, Button, Drawer, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function HeaderMobile() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
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
    <>
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
    </>
  );
}

export default HeaderMobile;
