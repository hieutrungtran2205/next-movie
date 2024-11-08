import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY } from '../../utils/const';

interface paramsProps {
  id: string | number;
  language?: string;
}

const getVideos = async (params: paramsProps) => {
  try {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/videos`, {
      params: {
        // language: params?.language || 'vi',
        api_key: API_KEY
      }
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const useQueryMovieVideos = (params: paramsProps) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['credits_videos'],
    queryFn: () => getVideos(params),
    enabled: !!params?.id
  });
  return { data, error, isLoading };
};
