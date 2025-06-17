'use client';

import { useQueryNowPlaying } from '@/api/movie/now-playing';
import MovieList from '@/components/MovieList';
import { memo } from 'react';

function HotMovies() {
  const { data } = useQueryNowPlaying();

  return <MovieList title="Phim hot" data={data} />;
}

export default memo(HotMovies);
