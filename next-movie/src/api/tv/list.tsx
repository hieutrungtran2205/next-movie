import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../../utils/const';

interface ParamsProps {
  language?: string;
  page?: number;
}

const getTvSeries = async (params?: ParamsProps) => {
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
    throw err;
  }
};

export const useQueryTvSeries = (params?: ParamsProps) => {
  return useQuery({
    queryKey: ['tv', params?.page, params],
    queryFn: () => getTvSeries(params)
  });
};
