'use client';

import { useQueryMovies } from '@/common/api/list';
import MovieCard from '@/common/components/MovieCard';
import { Grid } from '@mui/material';
import { memo } from 'react';
import Loading from './loading';

function HomePage() {
  const { data, isLoading } = useQueryMovies();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Grid container spacing={1} px={1}>
      {data?.results?.map((movie: any) => (
        <Grid item xs={6} sm={6} md={4} lg={3} key={movie.id}>
          <MovieCard data={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

export default memo(HomePage);
