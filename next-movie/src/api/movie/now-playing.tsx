import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../../utils/const';

interface ParamsProps {
  page?: number;
  language?: string;
}

const getNowPlaying = async (params?: ParamsProps) => {
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
    throw err;
  }
};

export const useQueryNowPlaying = (params?: ParamsProps) => {
  return useQuery({
    queryKey: ['now_playing', params],
    queryFn: () => getNowPlaying(params)
  });
};
