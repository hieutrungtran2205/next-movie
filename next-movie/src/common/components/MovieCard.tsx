import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';

function MovieCard(props: any) {
  const { data } = props;
  const { original_title, title, release_date, poster_path } = data || {};
  return (
    <>
      <Box
        component="img"
        src={`https://image.tmdb.org/t/p/w400${poster_path}`}
        alt=""
        sx={{ height: { xs: 280, sm: 280, md: 280, lg: 300, xl: 300 }, borderRadius: 3 }}
      />
      <Typography gutterBottom variant="body1" component="div" color="#fff" fontWeight={600} py={1}>
        {original_title} - {title} ({dayjs(release_date).format('YYYY')})
      </Typography>
    </>
  );
}

export default MovieCard;
