import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../../utils/const';

interface paramsProps {
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
  const { data, error, isLoading } = useQuery({ queryKey: ['now_playing'], queryFn: () => getNowPlaying(params) });
  return { data, error, isLoading };
};
