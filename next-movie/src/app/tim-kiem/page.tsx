'use client';

import { useQuerySearchList } from '@/api/search/list';
import MovieList from '@/components/MovieList';
import { memo } from 'react';

function Movies() {
  const { data } = useQuerySearchList();

  return <MovieList title="Kết quả tìm kiếm" data={data} />;
}

export default memo(Movies);
