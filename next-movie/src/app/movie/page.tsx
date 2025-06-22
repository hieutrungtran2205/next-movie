'use client';

import { useQueryMovies } from '@/api/movie/list';
import MovieList from '@/components/MovieList';
import { useSearchParams } from 'next/navigation';
import { memo } from 'react';

function Movies() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const { data } = useQueryMovies({ page });
  return <MovieList title="Phim lẻ" data={data} />;
}

export default memo(Movies);
