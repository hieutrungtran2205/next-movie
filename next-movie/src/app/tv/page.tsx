'use client';

import { useQueryTvSeries } from '@/api/tv/list';
import MovieList from '@/components/MovieList';
import { useSearchParams } from 'next/navigation';
import { memo } from 'react';

function TvSeries() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const { data } = useQueryTvSeries({ page });
  return <MovieList title="Phim chẵn" data={data} type="tv" />;
}

export default memo(TvSeries);
