'use client';

import { useQueryTvSeries } from '@/api/tv/list';
import MovieList from '@/components/MovieList';
import { memo } from 'react';

function TvSeries() {
  const { data } = useQueryTvSeries();
  return <MovieList title="Phim chẵn" data={data} type="tv" />;
}

export default memo(TvSeries);
