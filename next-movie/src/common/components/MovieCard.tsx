import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';

function MovieCard(props: any) {
  const { data } = props;
  const { original_title, original_name, title, name, release_date, poster_path } = data || {};
  return (
    <>
      <Box
        component="img"
        src={poster_path ? `https://image.tmdb.org/t/p/w400${poster_path}` : '/images/no-img.png'}
        alt=""
        sx={{ height: { xs: 280, sm: 280, md: 280, lg: 280, xl: 300 }, borderRadius: 3 }}
      />
      <Typography gutterBottom variant="body1" component="div" color="#fff" fontWeight={600} py={1}>
        {original_title || original_name} - {title || name} ({dayjs(release_date).format('YYYY')})
      </Typography>
    </>
  );
}

export default MovieCard;
