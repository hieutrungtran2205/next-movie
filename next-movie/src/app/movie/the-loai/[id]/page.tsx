'use client';

import { useQueryMovieGenres } from '@/api/movie/genres';
import { useQueryMovies } from '@/api/movie/list';
import MovieList from '@/components/MovieList';
import { useSearchParams } from 'next/navigation';
import { memo } from 'react';

function MovieByGenres({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const { id } = params;
  const { data: genresData } = useQueryMovieGenres();
  const genreName = genresData?.genres?.find((item: any) => item.id === Number(id))?.name;
  const { data } = useQueryMovies({ with_genres: id, page });

  return <MovieList title={genreName} data={data} />;
}

export default memo(MovieByGenres);
