import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../utils/const';

interface paramsProps {
  language?: string;
}

const getMovies = async (params?: paramsProps) => {
  console.log('params1', params);
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

export const useQueryMovies = (params?: paramsProps) => {
  const { data, error, isLoading } = useQuery({ queryKey: ['movies'], queryFn: () => getMovies(params) });
  return { data, error, isLoading };
};
