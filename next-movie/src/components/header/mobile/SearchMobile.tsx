import Filter from '@/components/filter/Filter';
import { BACKGROUND_COLOR } from '@/utils/const';
import { Close } from '@mui/icons-material';
import { Box, Button, Drawer } from '@mui/material';

function SearchMobile() {
  return (
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
  );
}

export default SearchMobile;
