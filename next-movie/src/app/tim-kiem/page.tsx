'use client';

import { useQuerySearchList } from '@/api/search/list';
import MovieList from '@/components/MovieList';
import { useSearchParams } from 'next/navigation';
import { memo } from 'react';

function Movies() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const query = searchParams.get('keywords') || '';
  const { data } = useQuerySearchList({ page, query });
  return <MovieList title="Kết quả tìm kiếm" data={data} />;
}

export default memo(Movies);
