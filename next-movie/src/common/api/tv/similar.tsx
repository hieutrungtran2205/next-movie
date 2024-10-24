import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../../utils/const';

interface paramsProps {
  language?: string;
  page?: number;
}

const getSimilar = async (id: string, params: paramsProps) => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/tv/${id}/similar`, {
      params: {
        language: params?.language || 'vi',
        page: params?.page || 1,
        api_key: API_KEY
      }
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const useQueryMoviesSimilar = (id: string, params: paramsProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['similar_movies', params],
    queryFn: () => getSimilar(id, params),
    enabled: !!id
  });
  return { data, error, isLoading };
};
