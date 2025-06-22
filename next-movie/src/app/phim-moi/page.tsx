'use client';

import { useQueryNowPlaying } from '@/api/movie/now-playing';
import MovieList from '@/components/MovieList';
import { useSearchParams } from 'next/navigation';
import { memo } from 'react';

function HotMovies() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const { data } = useQueryNowPlaying({ page });

  return <MovieList title="Phim hot" data={data} />;
}

export default memo(HotMovies);
