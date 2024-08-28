import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../../utils/const';

interface paramsProps {
  language?: string;
}

const getTvSeries = async (params?: paramsProps) => {
  try {
    const res = await axios.get('https://api.themoviedb.org/3/discover/tv', {
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

export const useQueryTvSeries = (params?: paramsProps) => {
  const { data, error, isLoading } = useQuery({ queryKey: ['tv'], queryFn: () => getTvSeries(params) });
  return { data, error, isLoading };
};
