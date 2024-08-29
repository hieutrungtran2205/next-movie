import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../../utils/const';

interface paramsProps {
  id: string | number;
  language?: string;
}

const getDetailMovie = async (params: paramsProps) => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}`, {
      params: {
        language: params?.language || 'vi',
        api_key: API_KEY
      }
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const useQueryDetailMovie = (params: paramsProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['movie_detail'],
    queryFn: () => getDetailMovie(params),
    enabled: !!params?.id
  });
  return { data, error, isLoading };
};
