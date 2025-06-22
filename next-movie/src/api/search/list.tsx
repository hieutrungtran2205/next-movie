import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../../utils/const';

interface ParamsProps {
  query: string;
  language?: string;
  page?: number;
}

const getSearchList = async (params: ParamsProps) => {
  try {
    const res = await axios.get('https://api.themoviedb.org/3/search/multi', {
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

export const useQuerySearchList = (params: ParamsProps) => {
  return useQuery({
    queryKey: ['search', params.page, params.query, params],
    queryFn: () => getSearchList(params)
  });
};
