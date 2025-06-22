import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../../utils/const';

interface ParamsProps {
  language?: string;
  page?: number;
  with_genres?: string;
}

const getMovies = async (params?: ParamsProps) => {
  try {
    const res = await axios.get('https://api.themoviedb.org/3/discover/movie', {
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

export const useQueryMovies = (params?: ParamsProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['movies', params],
    queryFn: () => getMovies(params)
  });
  return { data, error, isLoading };
};
