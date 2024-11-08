import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../../utils/const';

interface paramsProps {
  language?: string;
}

const getGenres = async (params?: paramsProps) => {
  try {
    const res = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        ...params,
        language: params?.language || 'vi',
        api_key: API_KEY
      }
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const useQueryMovieGenres = (params?: paramsProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['movie_genres', params],
    queryFn: () => getGenres(params)
  });
  return { data, error, isLoading };
};
