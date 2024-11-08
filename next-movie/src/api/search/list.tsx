import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { API_KEY } from '../../utils/const';

interface paramsProps {
  query: string;
  language?: string;
  page?: number;
}

const getSearchList = async (params?: paramsProps) => {
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
    return err;
  }
};

export const useQuerySearchList = (params?: paramsProps) => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const query = searchParams.get('keywords') || '';
  const { data, error, isLoading } = useQuery({
    queryKey: ['search', page, query, params],
    queryFn: () => getSearchList({ page, query, ...params })
  });
  return { data, error, isLoading };
};
