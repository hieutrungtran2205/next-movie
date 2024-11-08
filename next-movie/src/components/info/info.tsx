import { Box } from '@mui/material';
import TextInfo from './text-info';
import Videos from './videos';
import Cast from './cast';

function Info({ id }: { id: string }) {
  return (
    <Box
      sx={{
        height: '100%',
        display: { xs: 'block', lg: 'flex' },
        alignItems: 'end',
        gap: 2,
        padding: { xs: 1, md: 2, lg: 4 }
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1
        }}
      >
        <TextInfo id={id} />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: { xs: 5, xl: 8 }, mt: { xs: 1, xl: 0 } }}>
        <Videos id={id} />
        <Cast id={id} />
      </Box>
    </Box>
  );
}

export default Info;
