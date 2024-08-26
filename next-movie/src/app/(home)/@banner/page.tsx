'use client';

import { useQueryMovies } from '@/common/api/list';
import Loading from '../@list/loading';

function Page() {
  const { data, isLoading } = useQueryMovies();
  const topTrendingMovie = data?.results?.[0] || {};
  const { backdrop_path } = topTrendingMovie || {};
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />
    </div>
  );
}

export default Page;
