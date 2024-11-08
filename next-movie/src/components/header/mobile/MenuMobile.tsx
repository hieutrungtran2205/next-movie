import React from 'react';

function MenuMobile(props) {
  return (
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
        <Link href="/tv">
          <ListItemButton onClick={toggleDrawer(false)}>
            <ListItemText primary="Thể loại" />
          </ListItemButton>
        </Link>
      </List>
    </Drawer>
  );
}

export default MenuMobile;
