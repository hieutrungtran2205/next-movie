import { useQueryMovieGenres } from '@/api/movie/genres';
import { BACKGROUND_COLOR, ICON_COLOR } from '@/utils/const';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

function GenreList() {
  const { data } = useQueryMovieGenres();
  const middleIndex = Math.ceil(data?.genres?.length / 2);
  const leftGenres = data?.genres?.slice(0, middleIndex);
  const rightGenres = data?.genres?.slice(middleIndex);

  return (
    <Box sx={{ backgroundColor: BACKGROUND_COLOR, p: 2, display: 'flex', gap: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        {leftGenres?.map((item: any) => (
          <Link key={item.id} href={`/movie/the-loai/${item.id}`} style={{ width: 'fit-content' }}>
            <Typography key={item.id} component="span" color={ICON_COLOR}>
              {item.name}
            </Typography>
          </Link>
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        {rightGenres?.map((item: any) => (
          <Link key={item.id} href={`/movie/the-loai/${item.id}`} style={{ width: 'fit-content' }}>
            <Typography key={item.id} component="span" color={ICON_COLOR}>
              {item.name}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default GenreList;
