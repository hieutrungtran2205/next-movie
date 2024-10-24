import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../../utils/const';

interface paramsProps {
  append_to_response?: string;
  language?: string;
}

const getDetail = async (id: string, params?: paramsProps) => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/tv/${id}`, {
      params: {
        append_to_response: params?.append_to_response || 'videos,images',
        language: params?.language || 'vi',
        api_key: API_KEY
      }
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const useQueryDetailTvSeries = (id: string, params?: paramsProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['movie_detail', id, params],
    queryFn: () => getDetail(id, params),
    enabled: !!id
  });
  return { data, error, isLoading };
};
