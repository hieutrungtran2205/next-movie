'use client';

import { useQueryDetailMovie } from '@/common/api/movie/detail';
import { Box } from '@mui/material';
import Cast from './_components/cast';
import Info from './_components/info';
import Videos from './_components/videos';

function DetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data } = useQueryDetailMovie({ id });
  const { backdrop_path } = data || {};

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box
        sx={{
          mt: -10,
          position: 'relative',
          height: { xs: 300, sm: 300, md: 500, lg: '100vh', xl: '100vh' },
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9))'
          }
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1
          }}
        >
          <Box
            sx={{
              height: '100%',
              display: { xs: 'none', lg: 'flex' },
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
              <Info data={data} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Videos id={id} />
              <Cast id={id} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DetailPage;
