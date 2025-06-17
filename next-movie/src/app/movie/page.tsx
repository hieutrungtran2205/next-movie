'use client';

import { useQueryMovies } from '@/api/movie/list';
import MovieCard from '@/components/MovieCard';
import MyPagination from '@/components/MyPagination';
import { Box, Grid, Typography } from '@mui/material';
import { memo } from 'react';

function Movies() {
  const { data, isLoading } = useQueryMovies();
  const { results, total_pages } = data || {};

  return (
    <Box sx={{ px: { xs: 1, sm: 1, md: 5, lg: 20, xl: 30 } }}>
      <Typography variant="h6" color="#fcde56" fontWeight={600}>
        Phim lẻ
      </Typography>
      <Grid container spacing={{ xs: 1, sm: 1, md: 5, lg: 5, xl: 5 }} py={1}>
        {results?.map((item: any) => (
          <Grid item xs={6} sm={6} md={3} lg={2.4} xl={2.4} key={item.id}>
            <MovieCard data={item} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
        <MyPagination totalPages={total_pages} />
      </Box>
    </Box>
  );
}

export default memo(Movies);
