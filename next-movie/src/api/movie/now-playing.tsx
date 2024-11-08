import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../../utils/const';
import { useSearchParams } from 'next/navigation';

interface paramsProps {
  page?: number;
  language?: string;
}

const getNowPlaying = async (params?: paramsProps) => {
  try {
    const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
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

export const useQueryNowPlaying = (params?: paramsProps) => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const { data, error, isLoading } = useQuery({
    queryKey: ['now_playing', page, params],
    queryFn: () => getNowPlaying({ page, ...params })
  });
  return { data, error, isLoading };
};
