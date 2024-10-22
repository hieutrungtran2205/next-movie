import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { API_KEY } from '../../utils/const';

interface paramsProps {
  language?: string;
  page?: number;
}

const getMovies = async (params?: paramsProps) => {
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
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const { data, error, isLoading } = useQuery({
    queryKey: ['movies', page, params],
    queryFn: () => getMovies({ page, ...params })
  });
  return { data, error, isLoading };
};
