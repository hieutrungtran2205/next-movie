'use client';

import { useQueryMovies } from '@/api/movie/list';
import MovieList from '@/components/MovieList';
import { memo } from 'react';

function Movies() {
  const { data } = useQueryMovies();
  return <MovieList title="Phim lẻ" data={data} />;
}

export default memo(Movies);
