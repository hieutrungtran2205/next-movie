'use client';

import { useQueryDetailMovie } from '@/common/api/movie/detail';
import Info from '@/common/components/info/info';
import SimilarMovies from '@/common/components/similar/SimilarMovies';
import { Box } from '@mui/material';

function DetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data } = useQueryDetailMovie(id);
  const { backdrop_path } = data || {};

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0, xl: 4 } }}>
      <Box
        sx={{
          mt: { xs: 0, xl: -10 },
          position: 'relative',
          height: { xs: '25vh', sm: '30vh', md: '30vh', lg: '100vh', xl: '100vh' },
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
            display: { xs: 'none', xl: 'block' },
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1
          }}
        >
          <Info id={id} />
        </Box>
      </Box>
      <Box display={{ xs: 'block', xl: 'none' }}>
        <Info id={id} />
      </Box>
      <SimilarMovies id={id} />
    </Box>
  );
}

export default DetailPage;
